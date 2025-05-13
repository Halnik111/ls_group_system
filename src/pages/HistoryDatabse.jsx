import React from 'react';

const HistoryDatabase = () => {
    return (
        <div className={'text-white'}>
            <div className={'text-gray-800 text-xl w-full flex justify-center'}>
                <div className={'bg-red-100 p-2 pb-1 rounded-md'}>
                    Database
                </div>
            </div>
            <div className={'flex gap-4 m-3'}>
                <div className={'flex-1 flex items-center flex-col rounded-md bg-gray-800'}>
                    <div>Vehicles</div>
                    <div>
                        asd
                    </div>
                </div>
                <div className={'flex-1 flex items-center flex-col rounded-md bg-gray-500'}>
                    <div>Work</div>
                    <div>
                        asd
                    </div>
                </div>
                <div className={'flex-1 flex items-center flex-col rounded-md bg-gray-800'}>
                    <div>Material</div>
                    <div>
                        asd
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryDatabase;