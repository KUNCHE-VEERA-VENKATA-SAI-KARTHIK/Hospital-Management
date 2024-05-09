import React from 'react'
import hos from '../assets/hos.webp'
export default function About() {
    return (
    <>
    <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-8 lg:col-span-5 lg:flex w-200 ">
            <img class="rounded-md " src={hos} />
        </div>  
        <div class="mr-auto place-self-center lg:col-span-7 ">
            
            <p class="mt-12 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
            Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem facilis quae suscipit laborum dolorem voluptate, repellat tenetur id neque omnis laudantium dolores, officia eligendi incidunt, officiis repellendus impedit. Consequatur delectus ratione laboriosam eaque aliquam rem voluptates suscipit, illo eveniet enim iure accusantium hic facilis fugiat explicabo praesentium rerum quam cum modi laborum, quis reprehenderit. Iusto similique ut maiores architecto sapiente.adipisicing elit. Quo natus ratione vero cumque delectus. Exercitationem facilis nesciunt iure molestiae iusto!</p>
        </div>              
    </div>
   </section>
    </>
    );
}
