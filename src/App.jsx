import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Phone,
  Activity,
  BarChart3,
  Upload,
  PlayCircle,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Voter Upload", icon: Upload },
  { name: "Campaign Control", icon: PlayCircle },
  { name: "Call Analytics", icon: Phone },
  { name: "Live Monitoring", icon: Activity },
  { name: "Reports", icon: BarChart3 },
];

const stats = [
  {
    title: "Total Voters",
    value: "24,580",
    change: "+12%",
    icon: Users,
  },
  {
    title: "Supporters %",
    value: "68%",
    change: "+8%",
    icon: TrendingUp,
  },
  {
    title: "Calls Completed",
    value: "8,420",
    change: "+21%",
    icon: Phone,
  },
  {
    title: "Pending Issues",
    value: "132",
    change: "-6%",
    icon: AlertCircle,
  },
];

const issues = [
  { name: "Roads", percent: 78 },
  { name: "Water Supply", percent: 64 },
  { name: "Jobs", percent: 59 },
  { name: "Electricity", percent: 48 },
];

const liveActivities = [
  "Calling voter in Vijayawada...",
  "Message delivered successfully",
  "Supporter identified: Positive",
  "Ward 14 campaign started",
  "Survey report updated",
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <div className="w-72 bg-slate-900 border-r border-slate-800 p-6">
        <h1 className="text-2xl font-bold mb-8">Election Commission Agent</h1>

        <div className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all ${
                  active
                    ? "bg-blue-600 shadow-lg"
                    : "hover:bg-slate-800"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Admin Dashboard</h2>
            <p className="text-slate-400 mt-1">
              Campaign monitoring, analytics and voter intelligence
            </p>
          </div>

          <button className="bg-blue-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Start Campaign
          </button>
        </div>

        {/* Dashboard */}
        {activeTab === "Dashboard" && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-slate-400">{item.title}</h3>
                      <Icon size={20} />
                    </div>
                    <p className="text-3xl font-bold">{item.value}</p>
                    <p className="text-sm text-green-400 mt-2">{item.change}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Supporters + Issues */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <h3 className="text-xl font-semibold mb-4">Supporters Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2">Supporters: 68%</p>
                    <div className="w-full bg-slate-800 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full w-[68%]" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">Undecided: 22%</p>
                    <div className="w-full bg-slate-800 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full w-[22%]" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">Opposition: 10%</p>
                    <div className="w-full bg-slate-800 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full w-[10%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                <h3 className="text-xl font-semibold mb-4">Issues Breakdown</h3>
                <div className="space-y-4">
                  {issues.map((issue) => (
                    <div key={issue.name}>
                      <div className="flex justify-between mb-2">
                        <span>{issue.name}</span>
                        <span>{issue.percent}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div
                          className="bg-cyan-400 h-2 rounded-full"
                          style={{ width: `${issue.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Voter Upload */}
        {activeTab === "Voter Upload" && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-6">Upload Voter Data</h3>
            <div className="border-2 border-dashed border-slate-700 rounded-2xl p-10 text-center">
              <Upload className="mx-auto mb-4" size={40} />
              <p>Drag and drop CSV / Excel file here</p>
              <button className="mt-4 bg-blue-600 px-5 py-2 rounded-xl">
                Browse File
              </button>
            </div>
          </div>
        )}

        {/* Campaign Control */}
        {activeTab === "Campaign Control" && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Campaign Control Panel</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button className="bg-green-600 p-4 rounded-2xl">Start Auto Calling</button>
              <button className="bg-yellow-500 p-4 rounded-2xl">Pause Campaign</button>
              <button className="bg-red-600 p-4 rounded-2xl">Stop Campaign</button>
            </div>
          </div>
        )}

        {/* Live Monitoring */}
        {activeTab === "Live Monitoring" && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-6">Live Monitoring</h3>
            <div className="space-y-4">
              {liveActivities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800 p-4 rounded-2xl"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
