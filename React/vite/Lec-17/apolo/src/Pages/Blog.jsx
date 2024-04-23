import React from 'react'
import Navbar from '../Componets/Navbar'


const Blog = () => {
  return (
    <>
        <Navbar/>
       <h1 className='text-2xl font-bold text-center'>This Is Blog Page</h1>

       <div>
            <img src="https://victoriousfamily.org/wp-content/uploads/2019/09/dycb-book-shadow.png" alt="" />
        </div>
        <div>
            <p>Are you a parent who values Christian faith and wants your children to develop a deep and lasting relationship with God? Navigating your children’s faith journey in today’s culture can be challenging, but there’s hope!

                Introducing “Do Your Children Believe?” by Terence Chatmon. This book comes at a crucial time when we see parallels with a generation in history who didn’t know the Lord or His work. But imagine a different path for your family—a generation intimately familiar with God, rooted in faith.
                
                In this book, Chatmon presents a step-by-step process to create a personalized family plan that works for children of all ages, including grown ones with families of their own. Discover the transformative power of prayer, worship, and passing on godly practices from one generation to the next.
                
                Join countless workshop participants who have found success through Chatmon’s approach. His own family’s journey is filled with remarkable blessings. Don’t miss out on this inspiring resource that can shape your family’s faith legacy.</p>
        </div>
    </>
  )
}

export default Blog
