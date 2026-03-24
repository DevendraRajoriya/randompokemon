"use client";

import { Calendar, RefreshCw } from "lucide-react";

interface FreshnessSignalProps {
  lastUpdated: string;
  updateFrequency?: string;
}

export default function FreshnessSignal({ 
  lastUpdated, 
  updateFrequency = "Updated monthly with new Pokemon releases" 
}: FreshnessSignalProps) {
  return (
    <div className="bg-white border-2 border-black p-4 mb-8 shadow-sm">
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <Calendar className="text-indigo-600" size={20} />
          <div>
            <p className="font-mono text-xs text-gray-700 uppercase font-semibold">Last Updated</p>
            <p className="font-mono text-sm font-bold text-black">{lastUpdated}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw className="text-green-600" size={20} />
          <div>
            <p className="font-mono text-xs text-gray-700 uppercase font-semibold">Freshness</p>
            <p className="font-mono text-sm font-bold text-black">{updateFrequency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
