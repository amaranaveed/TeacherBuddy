import React from 'react'

interface ToggleSwitchProps {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  description?: string
  className?: string
}

export function ToggleSwitch({ 
  id, 
  checked, 
  onChange, 
  label, 
  description, 
  className = '' 
}: ToggleSwitchProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="space-y-1">
        <p className="text-sm font-medium">{label}</p>
        {description && <p className="text-xs text-slate-500">{description}</p>}
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
          aria-label={label}
        />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  )
}