"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Settings } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ReportComponent from "@/components/ReportComponent";
import { useToast } from "@/components/ui/use-toast";
import ChatComponent from "@/components/chatcomponent";

const Dashboard = () => {
  const { toast } = useToast();
  const [reportData, setReportData] = useState("");
  const router = useRouter();

  const onReportConfirmation = (data: string) => {
    setReportData(data);
    toast({
      description: "Updated!",
    });
  };

  // Handle the click to navigate back to the homepage
  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="grid h-screen w-full bg-background text-foreground">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] bg-card items-center gap-1 border-b border-border px-4">
          <h1
            className="text-xl font-semibold text-accent cursor-pointer"
            onClick={handleLogoClick} // Navigate to the homepage when clicked
          >
            <span className="flex flex-row">MediQuery</span>
          </h1>
          <div className="w-full flex flex-row justify-end gap-2">
            <ModeToggle />
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Settings />
                  <span className="sr-only">Settings</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh] bg-card text-card-foreground">
                <ReportComponent onReportConfirmation={onReportConfirmation} />
              </DrawerContent>
            </Drawer>
          </div>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="hidden md:flex flex-col bg-card rounded-lg p-4 text-card-foreground shadow-md">
            <ReportComponent onReportConfirmation={onReportConfirmation} />
          </div>
          <div className="lg:col-span-2 bg-card rounded-lg p-4 shadow-md">
            <ChatComponent reportData={reportData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
