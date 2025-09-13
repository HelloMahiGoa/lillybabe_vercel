'use client';

import { motion } from 'framer-motion';

export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header Skeleton */}
        <div className="text-center mb-8">
          <motion.div
            className="h-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg mx-auto mb-4 max-w-md"
            animate={{
              background: [
                "linear-gradient(90deg, #e9d5ff 0%, #fce7f3 50%, #e9d5ff 100%)",
                "linear-gradient(90deg, #fce7f3 0%, #e9d5ff 50%, #fce7f3 100%)",
                "linear-gradient(90deg, #e9d5ff 0%, #fce7f3 50%, #e9d5ff 100%)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-auto max-w-2xl"
            animate={{
              background: [
                "linear-gradient(90deg, #e5e7eb 0%, #d1d5db 50%, #e5e7eb 100%)",
                "linear-gradient(90deg, #d1d5db 0%, #e5e7eb 50%, #d1d5db 100%)",
                "linear-gradient(90deg, #e5e7eb 0%, #d1d5db 50%, #e5e7eb 100%)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Image */}
          <div className="lg:col-span-1">
            <motion.div
              className="aspect-[3/4] bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-2xl relative overflow-hidden"
              animate={{
                background: [
                  "linear-gradient(135deg, #e9d5ff 0%, #fce7f3 50%, #fecaca 100%)",
                  "linear-gradient(135deg, #fce7f3 0%, #fecaca 50%, #e9d5ff 100%)",
                  "linear-gradient(135deg, #e9d5ff 0%, #fce7f3 50%, #fecaca 100%)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            {/* Action Buttons Skeleton */}
            <div className="mt-6 space-y-3">
              <motion.div
                className="h-12 bg-gradient-to-r from-green-200 to-emerald-200 rounded-xl"
                animate={{
                  background: [
                    "linear-gradient(90deg, #bbf7d0 0%, #a7f3d0 50%, #bbf7d0 100%)",
                    "linear-gradient(90deg, #a7f3d0 0%, #bbf7d0 50%, #a7f3d0 100%)",
                    "linear-gradient(90deg, #bbf7d0 0%, #a7f3d0 50%, #bbf7d0 100%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="h-12 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl"
                animate={{
                  background: [
                    "linear-gradient(90deg, #bfdbfe 0%, #a5f3fc 50%, #bfdbfe 100%)",
                    "linear-gradient(90deg, #a5f3fc 0%, #bfdbfe 50%, #a5f3fc 100%)",
                    "linear-gradient(90deg, #bfdbfe 0%, #a5f3fc 50%, #bfdbfe 100%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <motion.div
                className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4"
                animate={{
                  background: [
                    "linear-gradient(90deg, #e5e7eb 0%, #d1d5db 50%, #e5e7eb 100%)",
                    "linear-gradient(90deg, #d1d5db 0%, #e5e7eb 50%, #d1d5db 100%)",
                    "linear-gradient(90deg, #e5e7eb 0%, #d1d5db 50%, #e5e7eb 100%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-1/2"
                animate={{
                  background: [
                    "linear-gradient(90deg, #e5e7eb 0%, #d1d5db 50%, #e5e7eb 100%)",
                    "linear-gradient(90deg, #d1d5db 0%, #e5e7eb 50%, #d1d5db 100%)",
                    "linear-gradient(90deg, #e5e7eb 0%, #d1d5db 50%, #e5e7eb 100%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
            </div>

            {/* Pricing Section */}
            <div className="space-y-3">
              <motion.div
                className="h-5 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg w-1/3"
                animate={{
                  background: [
                    "linear-gradient(90deg, #e9d5ff 0%, #fce7f3 50%, #e9d5ff 100%)",
                    "linear-gradient(90deg, #fce7f3 0%, #e9d5ff 50%, #fce7f3 100%)",
                    "linear-gradient(90deg, #e9d5ff 0%, #fce7f3 50%, #e9d5ff 100%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg"
                    animate={{
                      background: [
                        "linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)",
                        "linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)",
                        "linear-gradient(90deg, #f3f4f6 0%, #e5e7eb 50%, #f3f4f6 100%)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div className="space-y-3">
              <motion.div
                className="h-5 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg w-1/4"
                animate={{
                  background: [
                    "linear-gradient(90deg, #bfdbfe 0%, #a5f3fc 50%, #bfdbfe 100%)",
                    "linear-gradient(90deg, #a5f3fc 0%, #bfdbfe 50%, #a5f3fc 100%)",
                    "linear-gradient(90deg, #bfdbfe 0%, #a5f3fc 50%, #bfdbfe 100%)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-lg"
                    animate={{
                      background: [
                        "linear-gradient(135deg, #e9d5ff 0%, #fce7f3 50%, #fecaca 100%)",
                        "linear-gradient(135deg, #fce7f3 0%, #fecaca 50%, #e9d5ff 100%)",
                        "linear-gradient(135deg, #e9d5ff 0%, #fce7f3 50%, #fecaca 100%)"
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-purple-600 font-medium">Loading beautiful profile...</p>
        </motion.div>
      </div>
    </div>
  );
}
