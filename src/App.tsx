import React from "react";

//Types
interface StatCardProps{
  value: string | number;
  title: string;
  bgColor:string;
}

//Sub - components
const StatCard: React.FC<StatCardProps> = ({value, title, bgColor}) => (
  <div className="{`${bgColor} rounded-2xl p-6 flex-1 min-w-[200px]`}">
    <div className="text-3xl font-semibold text-slate-800 mb-2">{value}</div>
    <div className="text-sm font-medium text-slate-700">{title}</div>
  </div>
);

const Sidebar: React.FC = () => {
  const navItems = [
    {name: 'Overview', active:true},
    {name: 'Tasks', active:false},
    {name: 'Resources', active:false},
    {name: 'Message', active:false},
    {name: 'Setting', active:false},
  ]
}

return (
  <aside className="w-64 min-h-screen bg-[#F9FAF5] p-8 flex flex-col border-r border-gray-200">
    {/*logo area*/}
    <div className="flex items-center gap-3 mb-12">
      <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
        A
      </div>
      <span className="font-bold text-blue-950 tracking-wider text-sm">WORKSPACE</span>
    </div>

    {/*Navigation*/}
    <nav className="flex flex"></nav>
  </aside>
)

