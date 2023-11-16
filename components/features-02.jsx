"use client"

import clsx from "clsx"

import { ScrollObserver } from "@/components/ScrollObserver"

export default function Page() {
  return (
    <div className="min-h-screen w-screen px-8 py-12 md:px-0">
      

      <ScrollObserver className="relative mx-auto pt-10 max-w-2xl">
        <ScrollObserver.TriggerGroup className="max-w-lg space-y-3 text-3xl">
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span className={clsx({ "opacity-0": !isActive }, "absolute inset-0 text-black transition")}>
                  <span>A </span>
                  <span className="bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text text-transparent transition">
                    fully integrated
                  </span>
                  <span> suite of financial products</span>
                </span>

                <span className={clsx({ "opacity-0": isActive }, "relative text-black/20 transition")}>
                  A fully integrated suite of financial products.
                </span>
              </>
            )}
          </ScrollObserver.Trigger>

          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span className={clsx({ "opacity-0": !isActive }, "absolute inset-0 text-black transition")}>
                  <span>Support </span>
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent transition">
                    recurring business
                  </span>
                  <span> models and minimize churn</span>
                </span>

                <span className={clsx({ "opacity-0": isActive }, "relative text-black/20 transition")}>
                  Support recurring business models and minimize churn
                </span>
              </>
            )}
          </ScrollObserver.Trigger>

          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span className={clsx({ "opacity-0": !isActive }, "absolute inset-0 text-black transition")}>
                  <span>Ship </span>
                  <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent transition">
                    more quickly
                  </span>
                  <span> with powerful and easy-to-use APIs</span>
                </span>

                <span className={clsx({ "opacity-0": isActive }, "relative text-black/20 transition")}>
                  Ship more quickly with powerful and easy-to-use APIs
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
        </ScrollObserver.TriggerGroup>
      </ScrollObserver>
    </div>
  )
}
