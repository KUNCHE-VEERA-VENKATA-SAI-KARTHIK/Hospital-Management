import React from 'react'
import PDFFile from './PDFFile'
import { PDFDownloadLink } from '@react-pdf/renderer'
export default function Reports() {
   return (
    <>
        <div className="Pdf flex place-content-center mt-64" >
          <PDFDownloadLink document={<PDFFile/>} fileName='report'>
          {({loading})=>
            loading?(
              <button class="bg-purple-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Loading Document....</span>
              </button>
            ):(
              <button class="bg-purple-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download My Reports</span>
              </button>
            )
          }
          
          </PDFDownloadLink>
        </div>
      </>
      )
    }
 
