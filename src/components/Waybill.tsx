"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  MapPin,
  Clock,
} from "lucide-react";

/* Mock data – replace with API response later */
const mockData = {
  waybill: "100026519625",
  origin: "VASHI",
  destination: "BORIVALI",
  consignor: "GYANNAM NUTRIGO",
  consignee: "AMAZON SELLER SERVICES PVT LTD",
  status: "DELIVERED",
  events: [
    {
      status: "BOOKED",
      datetime: "29-Jul-2025 03:30 pm",
      location: "VASHI-12",
    },
    {
      status: "IN-TRANSIT",
      datetime: "01-Aug-2025 10:58 pm",
      location: "GREATER MUMBAI-11",
    },
    {
      status: "ARRIVED AT DESTINATION",
      datetime: "02-Aug-2025 01:55 am",
      location: "GREATER MUMBAI SDS-11",
    },
    {
      status: "OUT FOR DELIVERY",
      datetime: "07-Aug-2025 08:22 am",
      location: "GREATER MUMBAI SDS-11",
    },
    {
      status: "DELIVERED",
      datetime: "07-Aug-2025 05:50 pm",
      location: "GREATER MUMBAI SDS-11",
    },
  ],
};

export default function Waybill() {
  const [waybill, setWaybill] = useState("100026519625");
  const [data, setData] = useState<typeof mockData | null>(null);

  const handleTrack = () => {
    // 🔌 Replace with API call later
    setData(mockData);
  };

  return (
    <div className="bg-background text-sm rounded-xl border w-full max-w-[100%]">
      <div className="flex min-h-[85vh]">
        {/* Sidebar */}
        <aside className="w-72 bg-muted/40 p-6 rounded-l-xl">
          <h2 className="text-xl font-semibold mb-4">Waybill Tracker</h2>

          <div className="space-y-3">
            <Input
              placeholder="Enter Waybill Number"
              value={waybill}
              onChange={(e) => setWaybill(e.target.value)}
            />
            <Button className="w-full" onClick={handleTrack}>
              Track Waybill
            </Button>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6">
          {!data ? (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Enter a waybill number to view tracking details
            </div>
          ) : (
            <>
              {/* Summary */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base">
                    Waybill #{data.waybill}
                  </CardTitle>
                  <Badge variant="default">{data.status}</Badge>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Origin</span>
                    <div className="font-medium">{data.origin}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Destination</span>
                    <div className="font-medium">{data.destination}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Consignor</span>
                    <div className="font-medium">{data.consignor}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Consignee</span>
                    <div className="font-medium">{data.consignee}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Shipment Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    {data.events.map((event, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-3 w-3 rounded-full bg-primary" />
                          {idx !== data.events.length - 1 && (
                            <div className="w-px flex-1 bg-border mt-1" />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              {event.status}
                            </span>
                            <Badge variant="outline">
                              <Clock className="h-3 w-3 mr-1" />
                              {event.datetime}
                            </Badge>
                          </div>
                          <div className="text-muted-foreground flex items-center gap-1 mt-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
