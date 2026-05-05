import {
  Users,
  HandHeart,
  Heartbeat,
  Gift,
} from "@phosphor-icons/react";

const CounterSection = () => {
  return (
    <div className="relative z-20 mt-25 ">

      {/* 🔥 FLOATING COUNTER */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-4 md:px-8 lg:px-12 xl:px-[72px]">
        
        <div className="bg-[#FFAC00] rounded-2xl shadow-xl py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">

          <div className="flex flex-col items-center">
            <Users size={40} />
            <h3 className="text-2xl font-bold mt-2 font-display">500+</h3>
            <p className="text-sm">Families Supported</p>
          </div>

          <div className="flex flex-col items-center">
            <HandHeart size={40} />
            <h3 className="text-2xl font-bold mt-2 font-display">50+</h3>
            <p className="text-sm">Volunteers</p>
          </div>

          <div className="flex flex-col items-center">
            <Heartbeat size={40} />
            <h3 className="text-2xl font-bold mt-2 font-display">10,000+</h3>
            <p className="text-sm">Lives Impacted</p>
          </div>

          <div className="flex flex-col items-center">
            <Gift size={40} />
            <h3 className="text-2xl font-bold mt-2 font-display">100+</h3>
            <p className="text-sm">Donation Campaigns</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CounterSection;