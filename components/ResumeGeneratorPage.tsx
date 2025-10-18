import React, { useState, useRef } from 'react';
import type { Experience, Project, ResumeFormData, EditorContact } from '../types';
import { TrashIcon } from './icons/TrashIcon';
import { PlusIcon } from './icons/PlusIcon';
import ModernResumeTemplate from './ModernResumeTemplate';
import ClassicResumeTemplate from './ClassicResumeTemplate';
import ProfessionalResumeTemplate from './ProfessionalResumeTemplate';
import CreativeResumeTemplate from './CreativeResumeTemplate';
import CorporateResumeTemplate from './CorporateResumeTemplate';
import SidebarResumeTemplate from './SidebarResumeTemplate';
import GraphicDesignerResumeTemplate from './GraphicDesignerResumeTemplate';
import ExecutiveResumeTemplate from './ExecutiveResumeTemplate';
import { HomeIcon } from './icons/HomeIcon';
import { LayoutIcon } from './icons/LayoutIcon';
import { DatabaseIcon } from './icons/DatabaseIcon';
import { FolderIcon } from './icons/FolderIcon';
import { PencilAltIcon } from './icons/PencilAltIcon';
import { BookmarkIcon } from './icons/BookmarkIcon';
import { DocumentReportIcon } from './icons/DocumentReportIcon';
import { ShareIcon } from './icons/ShareIcon';
import { EyeIcon } from './icons/EyeIcon';
import { UserCircleIcon } from './icons/UserCircleIcon';


// These libraries are loaded from index.html via CDN
declare const html2canvas: any;
declare const jspdf: any;

const mockContacts: EditorContact[] = [
    { id: 1, name: 'Crett Mai Vcess', role: 'Chisiao lis', date: 'Date 2/10/14', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Chispaio Belvety', role: 'Frose 27 2017', date: 'Date 2/10/14', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Ulsry Brown Loget', role: 'Dars 3 2011', date: 'Octer 3 1001', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Becily Seswoss', role: 'Dan 21011', date: 'Triplon Elidges', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Mamey Wisher', role: 'Ochat Schiare', date: 'Date 3/10/15', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'Ennyoring Al Nothien', role: 'Carpr 2013', date: 'Cboot Enchies', avatar: 'https://i.pravatar.cc/150?img=6' },
];


const ResumeGeneratorPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [template, setTemplate] = useState<'executive'>('executive');
    const [accentColor, setAccentColor] = useState('#2F6BFF');
    const [fontFamily, setFontFamily] = useState('Inter');
    const [formData, setFormData] = useState<ResumeFormData>({
        fullName: 'Drsin Jeh Resume',
        targetRole: 'Prepleas Scimmar',
        phone: '123-456-7890',
        email: 'drisin.jeh@example.com',
        linkedin: 'linkedin.com/in/drisinjeh',
        location: 'City, State',
        portfolio: 'drisinjeh.com',
        summary: "A brief summary about Drsin Jeh's professional background, highlighting key skills and career goals. This section aims to provide a quick overview for recruiters.",
        experiences: [
            { id: 1, jobTitle: 'Sunger Vlars', company: 'Tech Solutions Inc.', startDate: 'Jan 2020', endDate: 'Present', description: '• Led a team in developing scalable web applications.\n• Improved application performance by 30%.' },
            { id: 2, jobTitle: 'FYRLLR CE PLMLINGS', company: 'Innovate Co.', startDate: 'Jun 2018', endDate: 'Dec 2019', description: '• Designed and implemented new features for the main product.\n• Collaborated with cross-functional teams.' },
        ],
        education: "Vellnas Sstinets - University of Technology, 2018",
        skills: 'JavaScript, React, Node.js, SQL, Project Management',
        languages: 'English, Spanish',
        certifications: 'Certified Web Developer, 2019',
        awards: 'Employee of the Year, 2021',
        projects: [
            { id: 1, name: 'Personal Portfolio', description: 'A personal website to showcase projects.', link: 'drisinjeh.com' }
        ],
        interests: 'Hiking, Photography, Reading',
        profilePhoto: 'https://i.pravatar.cc/150?img=8',
        coreCompetencies: ''
    });

    const resumePreviewRef = useRef<HTMLDivElement>(null);
    
    // Form handlers can be added here if needed for interactivity in sidebars

    const downloadPDF = () => {
        const input = resumePreviewRef.current;
        if (input) {
            const a4_width_px = 794;
            html2canvas(input, { scale: 2, width: a4_width_px, height: input.scrollHeight }).then((canvas: any) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jspdf.jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' });
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`${formData.fullName.replace(/\s/g, '_')}_Resume.pdf`);
            });
        }
    };

    return (
        <div className="flex flex-col h-screen bg-slate-100 text-slate-800 font-sans text-sm">
            {/* Top Header */}
            <header className="flex-shrink-0 bg-white h-16 border-b border-slate-200 flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-1 rounded-md hover:bg-slate-100"><HomeIcon className="h-6 w-6 text-slate-600" /></button>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Hanepples</span>
                        <span className="text-slate-400">/</span>
                        <span className="text-slate-500">Alocuts</span>
                         <span className="text-slate-400">/</span>
                        <span className="text-slate-500">Cobral</span>
                    </div>
                </div>
                <div className="flex-1 max-w-md mx-4">
                     <div className="relative">
                        <input type="search" placeholder="Log Tines" className="w-full bg-slate-100 border-none rounded-md pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500" />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2"><SearchIcon className="h-5 w-5 text-slate-400" /></div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 border border-slate-300 rounded-md text-sm font-medium hover:bg-slate-100">Resural</button>
                    <button className="px-3 py-1.5 border border-slate-300 rounded-md text-sm font-medium hover:bg-slate-100 flex items-center gap-1"><EyeIcon className="h-4 w-4"/>View</button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">Anity Comel</button>
                    <UserCircleIcon className="h-8 w-8 text-slate-500"/>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Vertical Nav */}
                <nav className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-4">
                    <button className="p-2 rounded-lg bg-blue-100 text-blue-600"><LayoutIcon className="h-6 w-6"/></button>
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"><DatabaseIcon className="h-6 w-6"/></button>
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"><FolderIcon className="h-6 w-6"/></button>
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"><PencilAltIcon className="h-6 w-6"/></button>
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"><BookmarkIcon className="h-6 w-6"/></button>
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"><DocumentReportIcon className="h-6 w-6"/></button>
                    <div className="flex-grow"></div>
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"><ShareIcon className="h-6 w-6"/></button>
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"><TrashIcon className="h-6 w-6"/></button>
                </nav>

                {/* Left Sidebar */}
                <aside className="w-72 bg-white p-4 overflow-y-auto border-r border-slate-200">
                    <div className="space-y-6">
                        <section>
                            <h3 className="font-semibold mb-2">Poriage Templats</h3>
                             <div className="border rounded-lg p-2">
                                <img src="https://picsum.photos/seed/left-template/400/280" alt="Template Thumbnail" className="rounded-md" />
                            </div>
                        </section>
                        <section>
                            <h3 className="font-semibold mb-2">Desired Template</h3>
                            <div className="space-y-2">
                                <img src="https://picsum.photos/seed/desired1/400/200" alt="Desired Thumbnail" className="rounded-md border" />
                                <img src="https://picsum.photos/seed/desired2/400/200" alt="Desired Thumbnail" className="rounded-md border" />
                            </div>
                        </section>
                        <section>
                            <h3 className="font-semibold mb-2">Framor</h3>
                            <div className="flex items-center gap-4 p-2 border rounded-lg">
                                <img src={formData.profilePhoto} className="w-16 h-16 rounded-full object-cover"/>
                                <div>
                                    <h4 className="font-bold">Drsin Juin Resume</h4>
                                    <p className="text-xs text-slate-500">Prepleas Scimmar</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </aside>

                {/* Center Canvas */}
                <main className="flex-1 p-8 overflow-y-auto">
                     <div className="max-w-[850px] mx-auto">
                        <div ref={resumePreviewRef} className="w-[210mm] min-h-[297mm] shadow-2xl bg-white mx-auto border">
                             <ExecutiveResumeTemplate formData={formData} fontFamily={fontFamily} />
                        </div>
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="w-72 bg-white p-4 overflow-y-auto border-l border-slate-200">
                     <h3 className="font-semibold mb-4">Gragrations</h3>
                     <div className="space-y-3">
                        {mockContacts.slice(0, 5).map(contact => (
                            <div key={contact.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                                <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-sm">{contact.name}</p>
                                    <p className="text-xs text-slate-500">{contact.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <h3 className="font-semibold my-4">Baten Produes</h3>
                     <div className="space-y-3">
                        {mockContacts.slice(5).map(contact => (
                            <div key={contact.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                                <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-sm">{contact.name}</p>
                                    <p className="text-xs text-slate-500">{contact.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
};

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);


export default ResumeGeneratorPage;