import React from 'react';

const orders = [
    {
        id: '1',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },{
        id: '2',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },{
        id: '3',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },
    {
        id: '4',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },{
        id: '5',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },{
        id: '6',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },
    {
        id: '7',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },{
        id: '8',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },{
        id: '9',
        status: "active",
        car: {
            plate: "BA774SC",
            make: "Audi",
            model: "A6 C6",
            year: "2008",
            color: "Black",
            km: "158 900",
        },
        opened: "01.01.2025",
    },
]

const Order = () => {
    return (
        <div className={'w-full flex gap-4 p-2'}>
            {/*new order panel*/}
            
            {/*open orders*/}
            <div className={'w-full h-[calc(100vh-68px)] md:h-[calc(100vh-84px)] md:w-1/3 xl:w1/5'}>
                <div className={'flex items-center justify-between p-2 bg-gray-800 mb-3 rounded-lg'}>
                    <div
                        className={'mr-auto flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-white px-2'}>
                        <img src={'/search.png'} alt={''} width={14} height={14} className={'w-4 h-4'}/>
                        <input type={'text'} placeholder={'Hladať...'}
                               className={'border-none bg-transparent w-[100px] p-2 outline-none'}/>
                    </div>
                    <div className={'rounded-lg border py-1 px-2'}>+ Nová..</div>
                </div>
                <div className={'h-full overflow-y-scroll rounded-lg flex flex-col gap-4'}>
                    {orders.map(i => (
                        <div className={'bg-gray-800 rounded-lg p-2 flex justify-between'} key={i.id}>
                            <div className={''}>
                                <div className={'font-bold '}>{i.car.plate}</div>
                                <div className={'font-bold text-sm'}>{i.car.make} {i.car.model}</div>
                            <div className={'text-sm'}>{i.car.year}, Farba: {i.car.color}</div>
                            <div className={'text-sm mt-1'}>{i.car.km}Km</div>
                        </div>
                        <div className={'flex h-full flex-col items-end gap-2'}>
                            <div className={'font-bold'}>{i.opened}</div>
                            <div className={`rounded-full h-4 w-4 ${i.status === "active" ? 'bg-teal-500' : 'bg-red-200'}`}/>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            {/*order details*/}
            <div className={'hidden lg:block h-full md:w-2/3 xl:w-4/5 p-4 rounded-lg bg-gray-800'}>
                <div className={'flex items-center justify-between'}>
                    <div className={'py-2 px-3'}>Otvoril: Nikolas</div>
                    <div className={'font-bold text-xl'}>BA774SC</div>
                    <div className={'rounded-md border py-2 px-3'}>+ Material</div>
                </div>
            </div>
        </div>
    );
};

export default Order;