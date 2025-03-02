import type React from "react"
import { useState } from "react"

interface SettingsState {
  fullName: string
  nickName: string
  country: string
  timeZone: string
  gender: string
  language: string
  email: string
  notifications: {
    realTimeAlerts: boolean
    emailSmsNotifications: boolean
    soundVibration: boolean
  }
  tracking: {
    gpsTracking: string
    routeOptimization: string
    trafficUpdates: boolean
  }
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    fullName: "Jhon",
    nickName: "",
    country: "",
    timeZone: "",
    gender: "",
    language: "",
    email: "jhon@email.com",
    notifications: {
      realTimeAlerts: true,
      emailSmsNotifications: true,
      soundVibration: false,
    },
    tracking: {
      gpsTracking: "Enable",
      routeOptimization: "fastest",
      trafficUpdates: true,
    },
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationToggle = (key: keyof SettingsState["notifications"]) => {
    setSettings((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: !prev.notifications[key] },
    }))
  }

  const handleTrackingChange = (key: keyof SettingsState["tracking"], value: string | boolean) => {
    setSettings((prev) => ({
      ...prev,
      tracking: { ...prev.tracking, [key]: value },
    }))
  }

  return (
    <div className="max-w-full mx-auto pb-12 md:ml-[279px] bg-gray-50">
      {/* Header Banner */}
      <div className="bg-orange-500 text-white h-[227px] p-4">
        <h1 className="text-xl font-semibold">Welcome, {settings.fullName}</h1>
      </div>

      {/* Profile Section */}
      <div className="px-6 py-8 h-screen bg-white min-h-screen shadow-md -mt-4 rounded-t-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 bg-gray-200">
              {/* Placeholder for profile image */}
              <img src="/public/assets/Ellipse 2831.png" alt="" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{settings.fullName}</h2>
              <p className="text-gray-600">{settings.email}</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm">Edit</button>
        </div>

        {/* Account Settings */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={settings.fullName}
                  onChange={handleInputChange}
                  className="w-[723px] h-[63.4px] px-4 bg-gray-100 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nick Name</label>
                <input
                  type="text"
                  name="nickName"
                  value={settings.nickName}
                  onChange={handleInputChange}
                  className="w-[723px] h-[63.4px] px-4 bg-gray-100 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Country</label>
                <select
                  name="country"
                  value={settings.country}
                  onChange={handleInputChange}
                  className="w-[723px] h-[63.4px] px-4 bg-gray-100 rounded-md text-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <select
                  name="timeZone"
                  value={settings.timeZone}
                  onChange={handleInputChange}
                  className="w-[723px] h-[63.4px] px-4 bg-gray-100 rounded-md text-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Time Zone</option>
                  <option value="est">Eastern Time</option>
                  <option value="cst">Central Time</option>
                  <option value="pst">Pacific Time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Gender</label>
                <select
                  name="gender"
                  value={settings.gender}
                  onChange={handleInputChange}
                  className="w-[723px] h-[63.4px] px-4 bg-gray-100 rounded-md text-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select
                  name="language"
                  value={settings.language}
                  onChange={handleInputChange}
                  className="w-[723px] h-[63.4px] px-4 bg-gray-100 rounded-md text-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Language</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div>
                <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md text-lg">Change Password</button>
              </div>
            </div>
          </section>

          {/* Notification Settings */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between w-[723px]">
                <span className="text-lg">Real-Time Alerts</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.notifications.realTimeAlerts}
                    onChange={() => handleNotificationToggle("realTimeAlerts")}
                  />
                  <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-orange-500 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                </label>
              </div>
              <div className="flex items-center justify-between w-[723px]">
                <span className="text-lg">Email & SMS Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.notifications.emailSmsNotifications}
                    onChange={() => handleNotificationToggle("emailSmsNotifications")}
                  />
                  <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-orange-500 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                </label>
              </div>
              <div className="flex items-center justify-between w-[723px]">
                <span className="text-lg">Sound & Vibration</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.notifications.soundVibration}
                    onChange={() => handleNotificationToggle("soundVibration")}
                  />
                  <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-orange-500 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                </label>
              </div>
            </div>
          </section>

          {/* Vehicle & Tracking Settings */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Vehicle & Tracking Settings</h2>
            <div className="space-y-6">
              <div>
                <p className="font-medium mb-3 text-lg">GPS Tracking</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleTrackingChange("gpsTracking", "Enable")}
                    className={`px-6 py-3 rounded-md text-lg ${settings.tracking.gpsTracking === "Enable" ? "bg-orange-500 text-white" : "bg-gray-200"}`}
                  >
                    Enable
                  </button>
                  <button
                    onClick={() => handleTrackingChange("gpsTracking", "Disable")}
                    className={`px-6 py-3 rounded-md text-lg ${settings.tracking.gpsTracking === "Disable" ? "bg-orange-500 text-white" : "bg-gray-200"}`}
                  >
                    Disable
                  </button>
                </div>
              </div>
              <div>
                <p className="font-medium mb-3 text-lg">Route Optimization Preference</p>
                <div className="flex gap-4">
                  {["shortest", "fastest", "safest"].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleTrackingChange("routeOptimization", option)}
                      className={`px-6 py-3 rounded-md text-lg ${settings.tracking.routeOptimization === option ? "bg-orange-500 text-white" : "bg-gray-200"}`}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium mb-3 text-lg">Traffic Updates</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleTrackingChange("trafficUpdates", true)}
                    className={`px-6 py-3 rounded-md text-lg ${settings.tracking.trafficUpdates ? "bg-orange-500 text-white" : "bg-gray-200"}`}
                  >
                    On
                  </button>
                  <button
                    onClick={() => handleTrackingChange("trafficUpdates", false)}
                    className={`px-6 py-3 rounded-md text-lg ${!settings.tracking.trafficUpdates ? "bg-orange-500 text-white" : "bg-gray-200"}`}
                  >
                    Off
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Support & Help */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Support & Help</h2>
            <div className="space-y-4">
              <button className="w-[723px] px-6 py-3 bg-gray-100 rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                Live Support Chat
              </button>
              <button className="w-[723px] px-6 py-3 md:ml-20 bg-gray-100 rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                Feedback & Suggestions
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Settings

