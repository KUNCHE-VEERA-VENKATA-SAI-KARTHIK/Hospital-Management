import React from "react";
import {Page,Image,Document} from '@react-pdf/renderer'
import dummyreport from '../assets/dummyreport.jpg'

export default function PDFFile() {
  return (
    <>
    
    <Document>
        <Page>
            <Image  src={dummyreport}/>
        </Page>
    </Document>
    </>
  )
}
