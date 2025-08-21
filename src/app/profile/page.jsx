import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='p-10'>
      <div className='flex items-center justify-center'>
        <Image src='/logo.jpeg' width={400} height={100} alt='logo'/>
      </div>
      <h1 className='text-center mt-16 text-5xl'>Project Information</h1>
      
      <p className='mt-10'>
        This project was developed by Pola Pranith Kumar Reddy, Ibtehaj Ahmed, V Vamshi Krishna, Shaik Mohammad Sohail, and Yenni Sai Devardhan as part of a Cyber Security Internship. This project is designed to Secure the Organizations in Real World from Cyber Frauds performed by Hackers.
      </p>

      {/* Project Information Table */}
      <table className="mt-10 w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">Project Details</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Project Name</td>
            <td className="border border-gray-300 px-4 py-2">USB Physical Security</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Project Description</td>
            <td className="border border-gray-300 px-4 py-2">Implementing Physical Security Policy on USB Ports in Organization for Physical Security.</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Project Start Date</td>
            <td className="border border-gray-300 px-4 py-2">06-May-2025</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Project End Date</td>
            <td className="border border-gray-300 px-4 py-2">21-August-2025</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Project Status</td>
            <td className="border border-gray-300 px-4 py-2">Completed</td>
          </tr>
        </tbody>
      </table>
<h2 className="text-3xl mt-16 mb-4">Developer Details</h2>
<table className="w-full table-auto border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Employee ID</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Pola Pranith Kumar Reddy</td>
      <td className="border border-gray-300 px-4 py-2">ST#IS#7388</td>
      <td className="border border-gray-300 px-4 py-2">polapranith567@gmail.com</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Ibtehaj Ahmed</td>
      <td className="border border-gray-300 px-4 py-2">ST#IS#7401</td>
      <td className="border border-gray-300 px-4 py-2">ibtehajahmed2004@gmail.com</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">V Vamshi Krishna</td>
      <td className="border border-gray-300 px-4 py-2">ST#IS#7389</td>
      <td className="border border-gray-300 px-4 py-2">vallabudasvamshikrishna28@gmail.com</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Shaik Mohammad Sohail</td>
      <td className="border border-gray-300 px-4 py-2">ST#IS#7384</td>
      <td className="border border-gray-300 px-4 py-2">mohammadsohailshaik43@gmail.com</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Yenni Sai Devardhan</td>
      <td className="border border-gray-300 px-4 py-2">ST#IS#7387</td>
      <td className="border border-gray-300 px-4 py-2">yvardhu123@gmail.com</td>
    </tr>
  </tbody>
</table>


    <h2 className="text-3xl mt-16 mb-4">Company Details</h2>
<table className="w-full table-auto border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Name</td>
      <td className="border border-gray-300 px-4 py-2">Supraja Technologies</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Email</td>
      <td className="border border-gray-300 px-4 py-2">contact@suprajatechnologies.com</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
