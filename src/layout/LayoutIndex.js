import React, {useState} from 'react'
import LocalizedStrings from 'react-localization';
import HeaderBar from "./Header"
import Content from "./Content"
import Footer from "./Footer"

let strings = new LocalizedStrings({
    mn:{
        nuur:"НҮҮР",
        taniltsuulga:"ТАНИЛЦУУЛГА",
        tusuluud:"ТӨСЛҮҮД",
        bidniiTuhai:"БИДНИЙ ТУХАЙ",
        holbooBarih:"ХОЛБОО БАРИХ",
        headerMainTitle: '"КАРКАС ЗУРАГ" ХХК',
        headerMainTitleSub: "ЗУРАГ ТӨСӨЛ / ХОТ ТӨЛӨВЛӨЛТ / ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ / ТӨСӨЛ ХЭРЭГЖҮҮЛЭЛТ",
        // -------------------------------- Introduction ------------------------------------
        yagadBidniihSongohVe: "ЯАГААД БИДНИЙГ СОНГОХ ВЭ ?",
        taniltsuulgaText:"Бид үйл ажиллагаандаа олон улсад хүлээн зөвшөөрөгдсөн барилгын зураг төсөл, орчин үеийн хэрэгцээ шаардлагын хангаж шинэ техник технологийг нэвтрүүлэхийн төлөө салбартаа мэргэшсэн чадавхтай багийг бүрдүүлж, хууль дүрэм норм стандартыг чандлан дээдэлсэн, нийгмийн хамт олон байхыг зорьж ажиллаж байна.",
        ontslogChanar: "Онцлог шинж чанарууд",
        ontslogChanar1: "Барилгын иж бүрэн зураг төсөл боловсруулдаг ууган",
        ontslogChanar2: "Cалбартаа туршлагаараа тэргүүлэгч",
        ontslogChanar3: "Барилгын иж бүрэн зураг төсөл боловсруулдаг",
        tsaashUnshihBtnText: "ЦААШ УНШИХ",
        // -------------------------------- Service ------------------------------------
        uilchilgee: "ҮЙЛЧИЛГЭЭ",
        uilchilgeeSubTitle: "БИД ТАНД ЮУ ХИЙЖ ӨГЖ ЧАДАХ ВЭ ?",
        uilchilgee1: "ЕРӨНХИЙ ТӨЛӨВЛӨГӨӨНИЙ ЗУРАГ ТӨСӨЛ",
        uilchilgee2: "АРХИТЕКТУР ТӨЛӨВЛӨЛТ",
        uilchilgee3: "ИЖ БҮРЭН АЖЛЫН ЗУРАГ ТӨСӨЛ",
        uilchilgee4: "ИНЖЕНЕР ХАНГАМЖ",
        uilchilgee5: "ҮЙЛДВЭРИЙН БАРИЛГЫН ИЖ БҮРЭН ЗУРАГ ТӨСӨЛ",
        uilchilgee6: "ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ",
        uilchilgee7: "БАРИЛГЫН ТӨСӨВ",
        uilchilgee1Desc: "Хот төлөвлөлт, бүс нутгийн хөгжлийн төсөл суурь судалгаа, дэд бүтцийн хөгжлийн төсөл, ерөнхий төлөвлөгөө.",
        uilchilgee2Desc: "Интерьер , экстерьер дизайны зураг төсөл, материалын түүвэр тооцоо.",
        uilchilgee3Desc: "16 хүртэл давхар барилга байгууламжийн ерөнхий төлөвлөгөө тохижилт, өндөржилт, барилга архитектур, эскиз зураг, барилга бүтээц, тооцоо.",
        uilchilgee4Desc1: "Халаалт, агаар сэлгэлт",
        uilchilgee4Desc2: "Усан хангамж",
        uilchilgee4Desc3: "Хүчит төхөөрөмжийн зураг төсөл",
        uilchilgee4Desc4: "Мэдээлэл холбоо, сүлжээний зураг төсөл",
        uilchilgee5Desc1: "Хүнд үйлдвэрийн",
        uilchilgee5Desc2: "Хөнгөн үйлдвэрийн",
        uilchilgee6Desc: "Зураг төсөл, барилга угсралт, инженерийн шугам сүлжээний зөвлөх үйлчилгээ.",
        uilchilgee7Desc: "Барилга байгууламж, гадна шугам сүлжээний нэгдсэн төсөв.",
        // -------------------------------- Project ------------------------------------
        tusulSubTitle: "ХИЙЖ ГҮЙЦЭТГЭСЭН ТӨСЛҮҮД",
        tusul1Title: "ОРХОН АЙМАГ, ЭРДЭНЭТ ХОТ",
        tusul1Desc: "7-р хорооллын ерөнхий төлөвлөгөө",
        tusul2Title: 'БНХАУ-ЫН "HAHN ARCHITECUAL DESIGN" КОМПАНИТАЙ ХАМТАРСАН ТӨСӨЛ',
        tusul2Desc: '"Trumph Palace" хорооллын зураг төсөл, ерөнхий төлөвлөгөө',
        tusul3Title: "БУЯНТ УХАА-2 ХОРООЛОЛ",
        tusul3Desc: "Хан-уул дүүрэг 10-р хороо",
        // -------------------------------- About us ------------------------------------
        bidniiTuhaiSubTitle: "МАНАЙ ХАМТ ОЛОН БОЛОН КОМПАНИТАЙ ТАНИЛЦАНА УУ",
        kampaniiTuhai: "КОМПАНЫ ТУХАЙ",
        manaiHamtOlon: "МАНАЙ ХАМТ ОЛОН",
        // -------------------------------- Contact us ------------------------------------
        holbooBarihSubTitle: "БАЙРШИЛ",
        // -------------------------------- Footer ------------------------------------
        hayg: "Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг 4-р хороо",
        utas: "+976-77176767",
        mail: "info@karkazzurag.mn",
        copyRight: '2020 "КАРКАС ЗУРАГ" ХХК',
        // -------------------------------- Modal first ------------------------------------
        ehniiModal1: "Бид үйл ажиллагаандаа олон улсад хүлээн зөвшөөрөгдсөн барилгын зураг төсөл, орчин үеийн хэрэгцээ шаардлагын хангаж шинэ техник технологийг нэвтрүүлэхийн төлөө салбартаа мэргэшсэн чадавхитай багийг бүрдүүлж, хууль дүрэм норм стандартыг чандлан дээдэлсэн, нийгмийн хамт олон байхыг зорьж ажиллаж байна.",
        ehniiModal2: "Манай компанийн өөрийн боловсруулсан зураг төсөл, бусад бүтээн байгуулалтын төслүүдийн барилга байгууламжийн ажлыг, газар шорооны ажлаас улсын комисст хүлээлгэн өгөх хүртэл бүхийл үйл явцад, хувиарын дагуу, эсвэл тодорхой үе шатуудаар хуваан хэсэгчлэн Монгол улсын стандартад нийцүүлэн үйлчилгээ үзүүлж, хяналт тавьж, төсөл хэрэгжүүлэх ажлыг хийж гүйцэтгэдэг.",
         // -------------------------------- Modal second ------------------------------------
        Modal2_1: '“KAPKAC ЗУРАГ" XXK нь 1989 онд байгуулагдсан. Барилгын иж vpэн зураг тесел боловсруулдаг ууган компаниудын нэг билээ. Манай компани нь хувийн хэвшил, терийн болон гадаадын байгууллагуудтай хамтран олон теслуудийг амжилттай хэрэгжүүлж, Улаанбаатар хот, орон нутгуудад манай боловсруулсан зураг төcлүүд орон сууцны хороолол, хотхон, эмнэлэг, сургууль, цэцэрлэг, зочид буудал үйлдвэр, худалдаа vилчилгээний зориулалттай барилга байгууламжууд сvндэрлэн боссоор байна.',
        Modal2_2: "Барилга байгууламжийн зураг тесел хот телевлелт, хэсэгчилсэн еренхий телевлегее, архитектур, орон зайн телевлелт, барилгын *v тээц, хийц, цахилгаан, холбоо дохиолол, автоматик, цэвэр бохир yc, гадна, дотор инженерийн шугам сүлжээ, төсөв тооцоо, зөвлөх үйлчилгээ, хяналт, аюулгүй ажиллагаа, зэрэг иж бүрэн зураг төслийг хийж гүйцэтгэж байна.",
        Modal2_3: "",
         // -------------------------------- Modal third ------------------------------------
         Modal3_1: 'Бид салбартаа мэргэшсэн хүмүүсээр баг болон ажиллаж байна.',
    },
    en:{
        nuur:"HOME",
        taniltsuulga:"INTRODUCTION",
        tusuluud:"PROJECTS",
        bidniiTuhai:"ABOUT US",
        holbooBarih:"CONTACT US",
        headerMainTitle: '"KARKAZ ZURAG" LLC',
        headerMainTitleSub: "ARCHITECTURAL DESIGN / URBAN PLANNING / CONSULTATION SERVICE / PROJECT EXECUTION",
        // -------------------------------- Introduction ------------------------------------
        yagadBidniihSongohVe: "WHY US ?",
        taniltsuulgaText:"To introduce internatinaly recognized working drawing, architectural designs, and provide the technological necessities of our modern age in our services, we have been working diligently to gather a team of experienced professionals, and have been vigilantly following rules, regulations, and standarts to be socially reponsible community.",
        ontslogChanar: "Features",
        ontslogChanar1: "The first to develop a complete building design",
        ontslogChanar2: "Industry leader in experience",
        ontslogChanar3: "Complete work design",
        tsaashUnshihBtnText: "MORE",
        // -------------------------------- Service ------------------------------------
        uilchilgee: "SERVICE",
        uilchilgeeSubTitle: "WHAT CAN WE GIVE YOU ?",
        uilchilgee1: "GENERAL ARCHITECTURAL DESIGN",
        uilchilgee2: "ARCHITECTURAL DESIGN",
        uilchilgee3: "COMPLETE WORK DESIGN",
        uilchilgee4: "ENGINEERING SUPPLIES",
        uilchilgee5: "MANUFACTURE ARCHITECTURAL DESIGN",
        uilchilgee6: "CONSULTATION SERVICE",
        uilchilgee7: "CONSTRUCTION BUDGET",
        uilchilgee1Desc: "Urban planning, regional development projects, baseline studies, infrastructure development projects, general plans.",
        uilchilgee2Desc: "Interior and exterior design design and material sampling.",
        uilchilgee3Desc: "General plan of up to 16 storey building, landscaping, elevation, building architecture, sketch drawing, building structure and calculation.",
        uilchilgee4Desc1: "Heating and ventilation",
        uilchilgee4Desc2: "Water supply",
        uilchilgee4Desc3: "Powerful device design",
        uilchilgee4Desc4: "Information and network design",
        uilchilgee5Desc1: "Heavy factory",
        uilchilgee5Desc2: "Light factory",
        uilchilgee6Desc: "Design, construction and engineering consulting services.",
        uilchilgee7Desc: "Unified budget for buildings and external networks.",
        // -------------------------------- Project ------------------------------------
        tusulSubTitle: "COMPLETED PROJECTS",
        tusul1Title: "ORKHON AIMAG, ERDENET CITY",
        tusul1Desc: "General plan of the 7th district",
        tusul2Title: 'JOINT PROJECT WITH HAHN ARCHITECUAL DESIGN, CHINA',
        tusul2Desc: '"Trumph Palace" design and general plan of the area',
        tusul3Title: "BUYANT UHAA-2 DISTRICT",
        tusul3Desc: "Khan-Uul district, 10th khoroo",
        // -------------------------------- About us ------------------------------------
        bidniiTuhaiSubTitle: "INTRODUCE OUR TEAM AND COMPANY",
        kampaniiTuhai: "ABOUT THE COMPANY",
        manaiHamtOlon: "OUR COLLEAGUE",
        // -------------------------------- Contact us ------------------------------------
        holbooBarihSubTitle: "LOCATION",
        // -------------------------------- Footer ------------------------------------
        hayg: "4-Khoroo, Sukhbaatar district, Ulaanbaatar city",
        utas: "+976-77176767",
        mail: "info@karkazzurag.mn",
        copyRight: '2020 "KARKAZ ZURAG" LLC',
        // -------------------------------- Modal first ------------------------------------
        ehniiModal1: "To introduce internationally recognized working drawings, architectural designs, and provide the technological necessities of our modern age in our services, we have been working diligently to gather a team of experienced professionals, and have been vigilantly following rules, regulations, and standards to be a socially responsible community.",
        ehniiModal2: "Starting from the groundwork of the building until the registration at the state property committee, our team of national-level advisors and skilled engineers closely monitor, advise, and work on every step of the process through a detailed schedule to ensure that our architectural design projects and other construction projects are executed at local and international standards.",
         // -------------------------------- Modal second ------------------------------------
        Modal2_1: 'KARKAS ZURAG" LLC is one of the pioneering company in the industry that produces comprehensive architectural design works since our establishment in 1989. As of now, we have successfully completed several projects in partnership with private sectors, governmental institutions, and international organizations. Our design works consisting of micro districts and complexes of residential apartments, hospitals, kindergartens, hotels, factories, and commercial service centers can be seen being built and towering throughout Ulaanbaatar and several other provincial areas.',
        Modal2_2: "Our extensive service includes building working drawing, urban planning, section elevation plan, architecture design, spatial planning, building structure and construction, electrical system, security and communications system, automatics, clean water and sewer system, external and internal cable network, budgeting and consulting service, as well as safety and security service.",
        Modal2_3: "Our company has been implementing about 80 percent of the ger district re-planning and new residential and housing projects including the following major ones: Comprehensive architectural design and drawings of the Buyant-Uhaa 1 and 2 public housing sub-districts at the request of the TOSK State Owned Company, apartment complexes for 1000 families in Darkhan and Erdenet cities and the Central province, renovations of the Gashuun-Sukhait border zone civil engineering structures, employee housing project for the Borshoo border zone.",
        // -------------------------------- Modal third ------------------------------------
        Modal3_1: 'We work as a team of professionals.',
   }
 });

export default function Main() {
    const [language, setLanguage] = useState('mn')
    const handleLanguageChange = (e) =>  {
        e.preventDefault();
        let lang = e.target.value;
        setLanguage(lang)
        
      }
    strings.setLanguage(language);    

    return (
        <>
        <HeaderBar strings={strings} handleLanguageChange={handleLanguageChange}/>
        <Content strings={strings} handleLanguageChange={handleLanguageChange}/>
        <Footer strings={strings} handleLanguageChange={handleLanguageChange}/>
        </>
    )
}
