export default function TotalBalance() {
    return (
        <>
            <section className="p-5 rounded-3xl">
                {/* Title Container */}
                <div className="bg-slate-50">
                    <p className="font-semibold text-2xl">Total Balance</p>
                </div>
                {/* Balance Container */}
                <div>
                    <p>$24,940.25</p>
                </div>
                {/* Spending Analytics Container */}
                <div className="bg-slate-50">
                    <p>Your spending limit</p>
                </div>
            </section>
        </>
    );
};