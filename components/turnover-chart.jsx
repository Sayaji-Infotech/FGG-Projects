"use client"

import { useState, useEffect } from "react"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList
} from "recharts"
import { ArrowUpRight, TrendingUp } from "lucide-react"

export function TurnoverChart3D() {
  const initialData = [
    { year: "FY 2019-20", value: 28 },
    { year: "FY 2020-21", value: 48 },
    { year: "FY 2021-22", value: 52 },
    { year: "FY 2022-23", value: 53 },
    { year: "FY 2023-24", value: 57 },
    { year: "FY 2024-25", value: 83 },
  ]

  const [data, setData] = useState(initialData)
  const [activeIndex, setActiveIndex] = useState(null)
  const [isAnimating, setIsAnimating] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640) // Tailwind's sm breakpoint
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 800)
    return () => clearTimeout(timer)
  }, [data])

  useEffect(() => {
    if (isMobile) {
      const mobileData = [
        {
          year: "FY 2019-21",
          value: Math.round((28 + 48 + 52) / 3),
          label: `${Math.round((28 + 48 + 52) / 3)}Cr`
        },
        {
          year: "FY 2022-23",
          value: 53,
          label: "53Cr"
        },
        {
          year: "FY 2024-25",
          value: 83,
          label: "83Cr"
        }
      ]
      setData(mobileData)
    } else {
      setData(initialData.map(item => ({ ...item, label: `${item.value}Cr` })))
    }
  }, [isMobile])

  const handleMouseEnter = (_, index) => setActiveIndex(index)
  const handleMouseLeave = () => setActiveIndex(null)

  const calculateGrowth = () => {
    const firstValue = data[0].value
    const lastValue = data[data.length - 1].value
    return (((lastValue - firstValue) / firstValue) * 100).toFixed(1)
  }

  const getYearOverYearGrowth = (currentYear, dataArray) => {
    const currentIndex = dataArray.findIndex((item) => item.year === currentYear)
    if (currentIndex <= 0) return null
    const currentValue = dataArray[currentIndex].value
    const previousValue = dataArray[currentIndex - 1].value
    const growthPercent = (((currentValue - previousValue) / previousValue) * 100).toFixed(1)
    if (growthPercent > 0) {
      return (
        <span className="flex items-center text-green-600">
          <TrendingUp className="h-3 w-3 mr-1" />
          {`+${growthPercent}% from previous`}
        </span>
      )
    } else if (growthPercent < 0) {
      return (
        <span className="flex items-center text-red-600">
          <ArrowUpRight className="h-3 w-3 mr-1 rotate-90" />
          {`${growthPercent}% from previous`}
        </span>
      )
    } else {
      return <span className="text-gray-600">No change</span>
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gradient-to-br from-white to-blue-50 p-4 border border-blue-100 rounded-lg shadow-xl">
          <p className="font-semibold text-gray-800 mb-1">{label}</p>
          <p className="text-blue-600 font-bold text-xl">{`${payload[0].value} Crore`}</p>
          {payload[0].payload.year !== data[0].year && (
            <div className="mt-2 pt-2 border-t border-blue-100">
              <p className="text-sm text-gray-600">{getYearOverYearGrowth(payload[0].payload.year, data)}</p>
            </div>
          )}
        </div>
      )
    }
    return null
  }

  const getBarFill = (index) => activeIndex === index ? "url(#activeBarGradient)" : "url(#barGradient)"

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      <div className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-xl shadow-lg border border-blue-100">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-2 sm:space-y-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">FGG's Turnover</h2>
            <p className="text-gray-500 text-sm">Financial performance over the years</p>
          </div>
          <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 w-fit sm:flex sm:items-center">
            <div className="flex items-center flex-wrap">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-bold text-green-600">{`+${calculateGrowth()}%`}</span>
              <span className="text-gray-500 text-sm ml-1 sm:ml-2">Overall Growth</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-900/5 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
              barSize={50}
              onMouseLeave={handleMouseLeave}
              className={isAnimating ? "opacity-70 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300"}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="activeBarGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#3B82F6" floodOpacity="0.3" />
                </filter>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6B7280", fontSize: 12 }}
                tickFormatter={(value) => `${value}`}
                label={{
                  value: "Crore",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fill: "#6B7280", fontSize: 14 },
                }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
              <Bar
                dataKey="value"
                radius={[6, 6, 0, 0]}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animationDuration={800}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getBarFill(index)}
                    filter={activeIndex === index ? "url(#shadow)" : "none"}
                    style={{
                      transition: "all 0.3s ease",
                      transform: activeIndex === index ? "translateY(-4px)" : "translateY(0)",
                    }}
                  />
                ))}
                <LabelList
                  dataKey="label"
                  position="top"
                  style={{
                    fill: "#3B82F6",
                    fontSize: 12,
                    fontWeight: "bold",
                    textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
