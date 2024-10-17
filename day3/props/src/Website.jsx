import React from 'react'
import Header from './Header'
import Footer from './Footer';
import UserDatas from './UserDatas';

export default function Website() {


    return (
        <>
            <div className='max-w-7xl mx-auto p-3 bg-[lightblue] text-center'>
                <Header />
                <div className='flex gap-2 flex-wrap justify-between text-start p-3'>
                    <UserDatas img={'https://picsum.photos/id/238/500/300'} name={'Ram'} city={"Jaipur"} age={25} />
                    <UserDatas img={'https://picsum.photos/id/239/500/300'} name={'Shyam'} city={"Kota"} age={35} />
                    <UserDatas img={'https://picsum.photos/id/240/500/300'} name={'Sita'} city={"Ayodhya"} age={30} />
                    <UserDatas img={'https://picsum.photos/id/241/500/300'} name={'Geeta'} city={"Jodhpur"} age={45} />
                    <UserDatas img={'https://picsum.photos/id/242/500/300'} name={'Hanuman'} city={"Sikar"} age={40} />
                    <UserDatas img={'https://picsum.photos/id/235/500/300'} name={'Shiv'} city={"New-York"} age={60} />
                </div>
                <Footer />

            </div>
        </>
    )
}
