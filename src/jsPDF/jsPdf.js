import React ,{useState} from "react";
import jsPDF from "jspdf";
import {Button} from "@mui/material"
const PdfGenerator=()=>{
    const [pdfContent,setPdfContent]=useState('');
    const generatePDF=()=>{
        const pdf=new jsPDF();
        pdf.text(pdfContent,10,10);
        pdf.save('Newgenerated.pdf')
    }
    return(
        <>
            <h1>PDF Generator</h1>
            <textarea
                value={pdfContent}
                onChange={(e)=>setPdfContent(e.target.value)}
                placeholder="Enter text for the PDF"
            />
            <Button onClick={generatePDF} variant="contained" >Generate PDF</Button>
        </>
    )
}
export default PdfGenerator;