import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, User2 } from "lucide-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex min-h-[85vh] mt-2 bg-background text-sm rounded-xl border md:max-w-[80%] ">
      {/* Sidebar */}
      <aside className="w-72  bg-muted/40 p-6 flex flex-col justify-between rounded-l-xl">
        <div>
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <p className="text-muted-foreground text-sm mb-6">Manage your account info.</p>
          <nav className="flex flex-col gap-2">
            <Button
              variant={activeTab === "profile" ? "secondary" : "ghost"}
              className="justify-start text-sm font-normal "
              onClick={() => setActiveTab("profile")}
            >
              <User2 className="w-4 h-4 mr-2" /> Profile
            </Button>
            <Button
              variant={activeTab === "security" ? "secondary" : "ghost"}
              className="justify-start text-sm font-normal "
              onClick={() => setActiveTab("security")}
            >
              <Shield className="w-4 h-4 mr-2" /> Security
            </Button>
          </nav>
        </div>
        <div className="text-xs text-muted-foreground">Secured by <strong>clerk</strong></div>
      </aside>

      {/* Main content */}
      <main className="flex-1  min-h-[85vh] rounded-xl border">
        {activeTab === "profile" && (
          <div className="max-w-4xl w-full mx-auto bg-background  p-6">
            <h2 className="text-xl font-semibold mb-6">Profile details</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Avatar>
        <AvatarImage src="https://github.com/leerob.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
                  <div>
                    <p className="font-medium text-base">ashish pandey</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update profile
                </Button>
              </div>

              <Separator />

              <div>
                <p className="text-muted-foreground mb-2 font-medium">Email addresses</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    pandeyashishsep11@gmail.com
                    <span className="ml-2 bg-muted px-2 py-0.5 rounded text-xs">Primary</span>
                  </div>
                  <Button variant="ghost" size="sm">...</Button>
                </div>
                <Button variant="link" size="sm" className="pl-0 mt-2">
                  + Add email address
                </Button>
              </div>

              <Separator />

              <div>
                <p className="text-muted-foreground mb-2 font-medium">Connected accounts</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      className="w-4 h-4"
                    />
                    Google • pandeyashishsep11@gmail.com
                  </div>
                  <Button variant="ghost" size="sm">...</Button>
                </div>
                <Button variant="link" size="sm" className="pl-0 mt-2">
                  + Connect account
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="max-w-4xl w-full mx-auto bg-background  p-6">
            <h2 className="text-xl font-semibold mb-6">Security</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-sm">Password</p>
                <Button variant="link" size="sm">Set password</Button>
              </div>

              <Separator />

              <div>
                <p className="text-muted-foreground mb-2 font-medium">Active devices</p>
                <div className="flex items-start gap-4">
                  <div className="bg-black w-8 h-8 rounded" />
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span>Macintosh</span>
                      <span className="bg-muted px-2 py-0.5 rounded text-xs">This device</span>
                    </div>
                    <p>Chrome 138.0.0.0</p>
                    <p>122.161.51.174 (Dādri, IN)</p>
                    <p>Today at 3:18 PM</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <p className="text-sm">Delete account</p>
                <Button variant="link" size="sm" className="text-destructive">
                  Delete account
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}