import React, {useState} from 'react'
import LocalizedStrings from 'react-localization';
import HeaderBar from "./Header"
import Content from "./Content"
import Footer from "./Footer"

let strings = new LocalizedStrings({
    mn: {
        nuur:"НҮҮР",
        taniltsuulga:"ТАНИЛЦУУЛГА",
        tusuluud:"ТӨСЛҮҮД",
        bidniiTuhai:"БИДНИЙ ТУХАЙ",
        holbooBarih:"ХОЛБОО БАРИХ",
        headerMainTitle: '"КАРКАЗ ЗУРАГ" ХХК',
        headerMainTitleSub: "ЗУРАГ ТӨСӨЛ / ХОТ ТӨЛӨВЛӨЛТ / ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ / ТӨСӨЛ ХЭРЭГЖҮҮЛЭЛТ",
        // -------------------------------- Introduction ------------------------------------
        yagadBidniihSongohVe: "ЯАГААД БИДНИЙГ СОНГОХ ВЭ ?",
        taniltsuulgaText:"Бид үйл ажиллагаандаа олон улсад хүлээн зөвшөөрөгдсөн барилгын зураг төсөл, орчин үеийн хэрэгцээ шаардлагийн хангаж шинэ техник техногийг нэвтрүүлэхийн төлөө салбартаа мэргэшсэн чадавхитай багийг бүрдүүлж, хууль дүрэм норм стандартыг чандлан дээдэлсэн, нийгмийн хамт олон байхыг зорьж ажиллаж байна.",
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
        // -------------------------------- Project ------------------------------------
        tusulSubTitle: "ХИЙЖ ГҮЙЦЭТГЭСЭН ТӨСЛҮҮД",
        // -------------------------------- About us ------------------------------------
        bidniiTuhaiSubTitle: "МАНАЙ ХАМТ ОЛОН БОЛОН КОМПАНИТАЙ ТАНИЛЦАНА УУ",
        kampaniiTuhai: "КОМПАНИЙ ТУХАЙ",
        manaiHamtOlon: "МАНАЙ ХАМТ ОЛОН",
        kampaniiTuhaiDelgerengui: '“KAPKAC ЗУРАГ" XXK нь 1989 онд байгуулагдсан. Барилгын иж vpэн зураг тесел боловсруулдаг ууган компаниудын нэг билээ. Манай компани нь хувийн хэвшил, терийн болон гадаадын байгууллагуудтай хамтран олон теслуудийг амжилттай хэрэгжуулж, Улаанбаатар хот, орон нутгуудад манай боловсруулсан зураг тecлvvд орон сууцны хороолол, хотхон, эмнэлэг, сургуууль, цэцэрлэг, зочид буудал уйлдвэр, худалдаа vилчилгээний зориулалтай барилга байгууламжууд сvндэрлэн боссоор байна. <br/> Барилга байгууламжийн зураг тесел хот телевлелт, хэсэгчилсэн еренхий телевлегее, архитектур...',
        // -------------------------------- Contact us ------------------------------------
        holbooBarihSubTitle: "БАЙРШИЛ",
        // -------------------------------- Footer ------------------------------------
        hayg: "Монгол улс Улаанбаатар хот Сүхбаатар дүүрэг 4-х хороо",
        utas: "+976-77176767",
        mail: "info@karkazzurag.mn",
        copyRight: '2020 "КАРКАЦ ЗУРАГ" ХХК'

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
        // -------------------------------- Project ------------------------------------
        tusulSubTitle: "COMPLETED PROJECTS",
        // -------------------------------- About us ------------------------------------
        bidniiTuhaiSubTitle: "INTRODUCE OUR TEAM AND COMPANY",
        kampaniiTuhai: "ABOUT THE COMPANY",
        manaiHamtOlon: "OUR COLLEAGUE",
        kampaniiTuhaiDelgerengui: '“KARKAZ ZURAG" LLC is one of the pioneering company in the industry that produces comprehensive architectureal design works since our establishment in 1989. As of now ......',
        // -------------------------------- Contact us ------------------------------------
        holbooBarihSubTitle: "LOCATION",
        // -------------------------------- Footer ------------------------------------
        hayg: "4-Khoroo Sukhbaatar district <br/> Ulaanbaatar city",
        utas: "+976-77176767",
        mail: "info@karkazzurag.mn",
        copyRight: '2020 "KARKAZ ZURAG" LLC'
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
