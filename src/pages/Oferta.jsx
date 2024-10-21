import React from "react";
import { useNavigate } from "react-router-dom";

const Oferta = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/course-info");

  };


  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    
      <div className="font-serif max-w-4xl mx-auto flex flex-col justify-center p-6 bg-white shadow-md rounded-md">
      <h2 className="text-center font-bold text-2xl mb-4">OMMAVIY OFERTA</h2>
      <p className="text-justify leading-relaxed mb-4">
        Mazkur «Psixologik va biznes treyning tadbiriga chipta sotish
        xizmatlarini ko‘rsatish shartlari to‘g‘risidagi kelishuv» (keyingi
        o‘rinlarda – «Kelishuv/Shartnoma» deb yuritiladi) O‘zbekiston
        Respublikasi Fuqarolik kodeksining 358 va 369-moddalariga muvofiq,
        «NORBEKOV SOG‘LOMLASHTIRISH VA MASLAHAT MARKAZI» MChJ tomonidan tuzilgan
        ommaviy oferta hisoblanadi (keyingi o‘rinlarda «Sotuvchi» deb
        yuritiladi) va ushbu chipta sotish Sotuvchi Sayti orqali tadbirlarga
        chipta sotib olishni xohlagan har qanday shaxsga (keyingi o‘rinlarda
        «Tomoshabin») yo‘naltirilgan.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        Mazkur ommaviy oferta chiptalarni sotib olish va qaytarish shartlarini,
        shuningdek, Sotuvchi va Tomoshabin o‘rtasida yuzaga keladigan huquq va
        majburiyatlarni tartibga soladi. Tomoshabin Sayt orqali chiptalarni
        sotib olishdan avval mazkur ofertaning shartlari bilan tanishishi shart.
        Agar Tomoshabin mazkur ofertaning shartlarini to‘liq qabul qilmasa, u
        chiptalarni Sayt orqali sotib olmasligi lozim.
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">
        ATAMALAR VA TA’RIFLAR
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        Mazkur ommaviy ofertada (keyingi o‘rinlarda – «Oferta») quyidagi
        atamalar va ta’riflar bir xil mazmunda birlik va ko‘plik shakllarda
        qo‘llaniladi:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Sotuvchi</strong> - “NORBEKOV SOG‘LOMLASHTIRISH VA MASLAHAT
          MARKAZI” MChJ, Toshkent shahar, Olmazor tumani, Yuqori Sebzor MFY,
          S-17/18-daha, 52A-uy manzilida joylashgan, mijozlarning buyurtmasi
          asosida chiptalarni sotish xizmatini ko‘rsatuvchi.
        </li>
        <li>
          <strong>Xaridor/Tomoshabin</strong> - jismoniy va yuridik shaxslar.
        </li>
        <li>
          <strong>Tadbir</strong> - ishtirokchilarga sog‘liqni tiklashning
          samarali usullari, insonning shaxsiy rivojlanishi, boshqaruv,
          kommunikatsiya, stressni boshqarish, jamoaviy ishlash kabi psixologik
          jihatlarni hamda biznes yuritish, moliyaviy boshqaruv, marketing va
          menejment kabi ko‘nikmalarni rivojlantirishga yo‘naltirilgan nazariy
          bilimlarni berish va ularni amaliy mashg‘ulotlar orqali
          mustahkamlashga qaratilgan treyning.
        </li>
        <li>
          <strong>Oferta</strong> - sotuvchining nomuayyan shaxslar doirasiga
          chakana savdo-sotiq qilish yo‘li orqali korxona xizmatini sotib olish
          bo‘yicha sotuvchining shartlari doirasida shartnoma tuzishga
          yo‘llangan taklifdir.
        </li>
        <li>
          <strong>Aksept</strong> - xaridor/Tomoshabin tomonidan ofertani to‘liq
          va shartlarsiz qabul qilish va shartnomani tuzilgan deb hisoblash.
        </li>
        <li>
          <strong>Shartnoma</strong> - sotuvchining xizmatini sotib olish
          bo‘yicha sotuvchining shartlari bilan xaridorning tanishishi va
          roziligi asosida taklif etilayotgan xizmatni sotib olish bo‘yicha
          kelishuv.
        </li>
        <li>
          <strong>Tomon</strong> - xaridor va/yoki sotuvchi.
        </li>
        <li>
          <strong>Elektron chipta</strong> – iTicketga tegishli tizim tomonidan
          tayyorlangan hujjat bo‘lib, u Tomoshabin tomonidan Chipta uchun to‘lov
          amalga oshirilganligini, u chiptani Sotuvchining Saytidan olish huquqi
          borligini hamda Tadbirda ishtirok etish huquqiga egaligini
          tasdiqlanadi.
        </li>
        <li>
          <strong>Taklifnoma</strong> - Sotuvchi tomonidan tayyorlangan elektron
          hujjat bo‘lib, u Tomoshabinning Chipta uchun to‘lov qilganligini
          tasdiqlaydi hamda uning Tadbirga kirish huquqiga ega ekanligini
          isbotlaydi. Elektron chipta va Taklifnoma keying o‘rinlarda “Elektron
          chipta” deb yuritiladi.
        </li>
        <li>
          <strong>Chiptaning nominal qiymati </strong> - Tadbirning Sotuvchisi
          tomonidan belgilangan qiymat, bu qiymat chipta blankida ko‘rsatiladi.
        </li>
        <li>
          <strong>Xizmat </strong> - Tomoshabinga axborot ko‘magini ko‘rsatish
          xizmati (call-markaz orqali Tadbir haqida ma’lumot berish, uning
          o‘tkazilish joyi, vaqti, sanasi, Elektron chiptalarni sotib olish
          tartibi va ketma-ketligi va h.k.lar haqida ma’lumot berish).
        </li>
        <li>
          <strong>Buyurtma </strong> - Tomoshabin tomonidan Saytdan tanlab
          olingan va bir identifikatsiya raqamiga biriktirilgan Elektron
          chiptalar yig‘indisi.
        </li>
        <li>
          <strong>Bekor qilish</strong> - sotib olgan chiptani bekor qilib,
          ularni Sotuvchining Saytida erkin sotuvga qaytarish.
        </li>
        <li>
          <strong>Sayt </strong> - Sotuvchining internetdagi veb-sayti:{" "}
          <span className="bg-yellow-300">www.norbekovforum.com</span> manzilida
          joylashgan.
        </li>
      </ul>

      <h3 className="text-center font-semibold text-xl mb-3">
        I. UMUMIY QOIDALAR
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">1.1.</span> Sotuvchi tomonidan
        sotilayotgan Chiptalar faqat ushbu Oferta shartlari asosida sotiladi va
        ular to‘liq va shartsiz qabul qilinadi. Tomoshabin tomonidan
        xizmatlardan foydalanish ushbu shartlarga qo‘shilishni bildiradi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">1.2.</span> Ushbu Oferta shartlari sayt
        orqali sotib oluvchi barcha Tomoshabinlar uchun bir xil amal qiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">1.3.</span> Sotuvchi ushbu Ofertaga
        istalgan vaqtda o‘zgartirishlar kiritishga haqli. Har qanday
        o‘zgarishlar saytda e’lon qilinadi. O‘zgartirishlardan keyin Sotuvchi
        xizmatlaridan foydalanish, ushbu o‘zgartirishlarni qabul qilishni
        bildiradi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">1.4.</span> Tomoshabin chiptalarni
        nusxalamaslik, qalbakilashtirmaslik yoki soxtalashtirmaslik yoxud
        tijorat maqsadlarida foydalanmaslik majburiyatini oladi, shuningdek,
        Elektron chiptani o‘z tovarlari (ishlari, xizmatlari) yoki uchinchi
        shaxsning tovarlari (ishlari, xizmatlari)ni reklama qilish maqsadida
        foydalanish huquqiga ega emas.
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">
        II. OFERTA SHARTNOMASINING PREDMETI
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.1.</span> Mazkur ofertaning predmeti
        Tomoshabinga chiptalarni sotish xizmatlarini sayt orqali ushbu
        Ofertaning shartlariga muvofiq taqdim etishdan iborat.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.2.</span> Chiptalar Tadbir
        tashkilotchisining nomidan sotiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.3.</span> Sotuvchi Tomoshabinga sayt
        orqali chiptalarni sotishda (keyingi o‘rinlarda «onlayn sotuvlar»)
        quyidagi xizmatlarni ko‘rsatadi:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Tomoshabinga axborot ko‘magi (Tadbir, uning o‘tkaziladigan joyi,
          vaqti, sxemasi va h.k. haqidagi ma’lumotlarni Sayt va{" "}
          <span className="bg-yellow-300">telegram messenjeri</span> orqali
          taqdim etish);
        </li>
        <li>Onlayn to‘lov imkoniyati;</li>
        <li>
          Elektron chiptani shakllantirish va uni Tomoshabin ko‘rsatgan elektron
          manzilga yuborish.
        </li>
      </ul>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.4.</span> Xizmatlar ushbu Ofertada
        belgilangan tartib va shartlar asosida taqdim etiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.5.</span> Tomoshabin tadbirga chipta
        sotib olish orqali Tomoshabin va Sotuvchi o‘rtasida tuzilgan shartnomaga
        muvofiq barcha huquq va majburiyatlar bevosita Tomoshabin va Sotuvchi
        o‘rtasida yuzaga keladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.6.</span> Tomoshabin va Tadbir
        Sotuvchisi o‘rtasida tuzilgan shartnomaning barcha shartlari, jumladan,
        tadbir nomi, sanasi, o‘tkazilish joyi va vaqti, tadbirga kirishda metall
        detektorlari ishlatilishi, tadbirga olib kirilishi taqiqlangan buyumlar
        ro‘yxati, chiptaning qiymati, chiptani qaytarish shartlari va boshqalar
        Sotuvchi tomonidan Tadbir haqida e’lon qilinishida Saytda ko‘rsatiladi.
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">
        III. OFERTANI AKSEPTLASH
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">3.1.</span> Tomoshabin Ofertani aksept
        qilishdan oldin, ushbu ofertaning barcha shartlarini to‘liq tushunganiga
        hamda ularni so‘zsiz va to‘liq qabul qilganiga ishonch hosil qilishi
        kerak.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">3.2.</span> Tomoshabin ushbu ofertani
        Tizim orqali (onlayn sotuvlar) qabul qilish (aksept qilish) quyidagi
        ketma-ket harakatlar orqali amalga oshiriladi:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li>
          <span className="font-semibold">“norbekovforum.com”</span> saytiga
          kirish;
        </li>
        <li>Tadbir o‘tkaziladigan joydagi mavjud o‘rindiqni tanlash;</li>
        <li>“Menejersiz to‘lov qilish” tugmasini bosish;</li>
        <li>
          Ochilgan sahifadagi mos maydonlarga kerakli ma’lumotlarni kiritish:
          familiya, ism, mobil telefon raqami va/yoki elektron pochta manzili
          (example@example.uz shaklida);
        </li>
        <li>Oferta shartlarini qabul qilish uchun tugmani bosish;</li>
        <li>
          Sahifaning pastki qismida 3 ta to‘lov qilish usuli chiqadi:{" "}
          <span className="font-semibold">CLICK</span>,{" "}
          <span className="font-semibold">PAY ME</span> va{" "}
          <span className="font-semibold">UZUM</span>;
        </li>
        <li>
          To‘lov amalga oshirilgandan so‘ng Tomoshabinga ham Sotuvchiga ham
          to‘lov amalga oshirilganligini tasdiqlovchi chek keladi;
        </li>
        <li>
          Sotuvchi tomonidan Tomoshabin ko‘rsatgan electron manzilga yoki
          telegram manziliga Elektron chipta yuboriladi, bu chiptani Tomoshabin
          chop etishi yoki mobil qurilmasida saqlashi mumkin.
        </li>
        <li>
          Elektron chipta ko‘rsatilgan elektron manzilga yuborilgan paytdan
          boshlab Tomoshabin tomonidan sotib olingan deb hisoblanadi.
        </li>
      </ol>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">3.3.</span> Chop etilgan Elektron chipta
        yoki mobil qurilmada saqlangan Elektron chipta Tomoshabin tomonidan
        Sotuvchidan Chipta olish uchun to‘lov amalga oshirilganligini tasdiqlash
        sifatida taqdim etilishi kerak. Bu chiptani taqdim etish orqali to‘lov
        amalga oshirilganligi va tomoshabinning kirish huquqiga ega ekanligi
        isbotlanadi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">3.4.</span> Sotuvchining manzili va
        uning ish vaqti haqidagi ma’lumot Sotuvchi tomonidan Tadbir haqida
        ma’lumot berilgan Saytda e’lon qilinadi yoki Tomoshabin murojaatiga
        asosan telefon orqali taqdim etiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">3.5.</span> 3.2-bandda ko‘rsatilgan
        harakatlarni amalga oshirish Tomoshabin tomonidan ushbu Ofertaning
        barcha shartlarini to‘liq va so‘zsiz qabul qilishini bildiradi, hech
        qanday istisnosiz va/yoki cheklovlarsiz, bu yozma shartnoma tuzishga
        teng hisoblanadi (O‘zbekiston Respublikasi Fuqarolik kodeksining
        370-moddasi).
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">
        IV. CHIPTANI QAYTARISH YOKI ALMASHTIRISH SHARTLARI. TADBIR BEKOR
        QILINGAN, O‘ZGARTIRILGAN YOKI KO‘CHIRILGAN HOLATLARDA CHIPTA PULINI
        QAYTARISH TARTIBI
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.1.</span> Agar Tomoshabin Elektron
        chiptadan foydalanmagan bo‘lsa, ya’ni Tadbir boshlanishidan oldin uni
        Tadbir Sotuvchisiga taqdim etmagan bo‘lsa yoki Chiptadan Tadbirga
        tashrif buyurish uchun foydalanmagan bo‘lsa, Sotuvchi kompensatsiya
        to‘lamaydi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.2.</span> Agar Tomoshabin Elektron
        pochta manziliga yoki Telegram manziliga yuborilgan to‘lov
        tasdiqnomasini (chekni) va Elektron chiptani yo‘qotgan (tasodifan
        o‘chirib yuborgan) bo‘lsa, u Tadbir o‘tkazilishidan kamida bir kun oldin
        Saytda ko‘rsatilgan telefon raqamlariga qo‘ng‘iroq qilish yoki elektron
        pochta/telegram messenjeriga xabar yuborish orqali Sotuvchiga murojaat
        qilib Elektron chiptani qayta yuborishni so‘rashi mumkin. Sotuvchi
        Elektron chiptani qayta tiklash uchun murojaat qilgan shaxsdan Elektron
        chiptani sotib olayotganda kiritgan barcha ma’lumotlarni, shuningdek,
        shaxsni tasdiqlash bilan bog‘liq boshqa qo‘shimcha ma’lumotlarni taqdim
        etishni talab qilishi mumkin.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        Tadbir o‘tkazilgandan so‘ng yoki Sotuvchi Tadbirni bekor qilish yoki
        ko‘chirish va chipta pulini qaytarish haqida e’lon qilganidan keyin
        Elektron chiptani yo‘qotish (tasodifan o‘chirish) haqidagi murojaatlar
        qabul qilinmaydi.
      </p>
      <p className="text-justify leading-relaxed mb-4 font-semibold">
        <span className="font-semibold">4.3.</span> Ushbu Oferta orqali
        Tomoshabin quyidagilar haqida ogohlantiriladi:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Sotuvchi Elektron chiptaning yo‘qolishi bilan bog‘liq xavflar uchun
          javobgar emas, shu jumladan, uni boshqa shaxslar tomonidan nusxa
          ko‘chirish yoki skanerlash holatlari uchun ham.
        </li>
        <li>
          Agar Tomoshabin avval Elektron chiptani olgan bo‘lsa va uni yo‘qotgan
          yoki tiklash uchun taqdim eta olmasa, Elektron chiptani tiklashni
          talab qilish huquqiga ega emas.
        </li>
      </ul>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.4.</span> Xarid qilingan chiptalar
        Sotuvchi tomonidan belgilangan hollarda va shartlarda almashtiriladi
        yoki qaytariladi. Bu shartlar Sotuvchi tomonidan Saytda Tadbir haqida
        e’lon qilingan holda ko‘rsatiladi. Bunday hollarda pulni qaytarish uchun
        Tomoshabin Tadbir Sotuvchisiga qo‘ng‘iroq qilib, Elektron chiptani
        taqdim qilishi yoki agar Chipta avval olingan bo‘lsa, Chiptani
        topshirishi va pulni qaytarish bo‘yicha ariza yozishi kerak. Ariza,
        shuningdek, elektron chipta rasmiylashtirilganda ko‘rsatilgan elektron
        pochta manzilidan Sotuvchining elektron pochta manziliga yuborilishi
        lozim.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        Pul mablag‘lari Sotuvchi tomonidan qonunchilikda belgilangan muddatlarda
        plastik kartaga Chipta qiymatiga teng miqdorda qaytariladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.5.</span> Tadbir ko‘chirilganda
        shuningdek, Tadbir bekor qilinganda, agar Tomoshabin bu o‘zgarishlarga
        rozi bo‘lmasa, Tomoshabin to‘langan Chiptaning to‘liq qiymatini qaytarib
        olish huquqiga ega.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        Bunday hollarda pulni qaytarish uchun Tomoshabin Sotuvchiga Elektron
        chiptani taqdim qilishi yoki agar Chipta avval olingan bo‘lsa, Chiptani
        topshirishi va pulni qaytarish bo‘yicha ariza yozishi kerak (ariza
        blankasini Sotuvchi tomonidan taqdim etiladi). Ariza, shuningdek,
        Elektron chipta rasmiylashtirilganda ko‘rsatilgan elektron pochta
        manzilidan Sotuvchining elektron pochta manziliga yuborilishi lozim. Pul
        mablag‘lari Tomoshabinning arizasi ko‘rib chiqilgan sanadan boshlab ikki
        ish haftasi davomida Tomoshabinning plastik kartasiga tashlab beriladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.6.</span> Ko‘chirilgan tadbirlar uchun
        pulni qaytarish arizasi Tadbir boshlanishiga 72 (yetmish ikki) soat
        qolgunga qadar qabul qilinadi va Chiptani qaytarish bo‘yicha ariza
        imzolangan kundan boshlab ikki ish haftasi ichida amalga oshiriladi.
      </p>

      {/* Section V */}
      <h3 className="text-center font-semibold text-xl mb-3">
        V. TOMONLARNING HUQUQ VA MAJBURIYATLARI
      </h3>
      <p className="text-justify leading-relaxed mb-4 font-semibold">
        <span className="font-semibold">5.1.</span> Tomoshabin quyidagi
        huquqlarga ega:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Chiptani to‘lov amalga oshirilgandan va ushbu ofertaning shartlariga
          rioya qilingandan so‘ng olish;
        </li>
        <li>
          Sotuvchining vakolatlari doirasida mavjud bo‘lgan chiptalarni sotish
          qoidalari, mavjud joylar va Tadbirlar haqidagi boshqa ma’lumotlarni
          olish huquqiga ega, bu ma’lumotlarni Sayt orqali yoki Sotuvchining
          Call-markaziga murojaat qilib olishi mumkin;
        </li>
        <li>
          Taklif qilingan to‘lov usullaridan birini tanlash huquqiga ega. Shu
          bilan birga, Tomoshabin tanlangan to‘lov usulining qo‘llanilish
          qoidalari bilan mustaqil ravishda tanishishi shart;
        </li>
        <li>
          Sotuvchining faoliyati haqida Saytda ko‘rsatilgan aloqa ma’lumotlari
          orqali fikr-mulohazalarini, taklif va shikoyatlarini yuborish;
        </li>
        <li>
          Tomoshabin amaldagi qonunchilikda nazarda tutilgan boshqa huquqlarga
          ham ega bo‘lishi mumkin.
        </li>
      </ul>
      <p className="text-justify leading-relaxed mb-4 font-semibold">
        <span className="font-semibold">5.2.</span> Tomoshabin quyidagilarga
        majbur:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Chiptani Sayt orqali sotib olayotganda talab qilinadigan barcha
          ma’lumotlarni to‘g‘ri va to‘liq holatda taqdim etishi kerak. Shu bilan
          birga, Tomoshabin Sotuvchiga taqdim etilgan ma’lumotlarning
          to‘g‘riligi uchun to‘liq javobgarlikni o‘z zimmasiga oladi;
        </li>
        <li>
          Tadbirning barcha cheklovlari, shu jumladan, voyaga yetmagan bolalar
          ishtirokiga oid cheklovlar bilan tanishishi shart. Tomoshabin u
          chiptalarni sotib olayotgan voyaga yetmagan bolalar uchun to‘liq
          javobgarlikni o‘z zimmasiga oladi. Tomoshabin bunday shaxslar uchun
          to‘liq javobgar bo‘lishini va yosh cheklovlariga rioya qilinmagan
          holda voyaga yetmagan bolaga yoki o‘ziga tadbirga tashrif buyurishga
          ruxsat berilmasligi mumkinligini qabul qiladi;
        </li>
        <li>
          Chipta uchun belgilangan to‘lovning to‘liq qiymatini to‘lash
          majburiyatini oladi;
        </li>
        <li>
          Sotuvchining ish faoliyatiga yoki obro‘siga zarar yetkazishi mumkin
          bo‘lgan noto‘g‘ri yoki ataylab yolg‘on ma’lumotlarni joylashtirmaslik,
          e’lon qilmaslik, tarqatmaslik yoki uzatmaslik, qandaydir muammo yoki
          tushunmovchilik yuzaga kelsa Sotuvchining Call-markaziga qo‘ng‘iroq
          qilib masalaga oydinlik kiritish;
        </li>
        <li>
          Ushbu Oferta va Saytda keltirilgan qoidalar asosida chiptani sotib
          olish, almashtirish va/yoki qaytarish jarayoniga oid barcha
          protseduralarga rioya qilish majburiyatini oladi;
        </li>
        <li>
          Tadbir Sotuvchining, Tadbir o‘tkaziladigan joy ma’muriyatining
          vakillari va huquqni muhofaza qiluvchi organlarning qonunchilik
          talablariga, odob-axloq qoidalariga va yong‘in xavfsizligi qoidalariga
          rioya qilish bo‘yicha qonuniy talablarini bajarishi majburiyatini
          oladi.
        </li>
      </ul>
      <p className="text-justify leading-relaxed mb-4 font-semibold">
        <span className="font-semibold">5.3.</span> Sotuvchi quyidagi huquqlarga
        ega:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Tomoshabin Tadbir haqida qo‘shimcha ma’lumot so‘raganida, Saytda
          keltirilgan ma’lumotlardan tashqari, bu ma’lumotlarni Tomoshabinga
          taqdim etish;
        </li>
        <li>
          Chipta narxini belgilash va o‘zgartirish, Tadbirda ishtirok etish
          qoidalar va talablarini ishlab chiqish, o‘zgartirish va/yoki bekor
          qilish;
        </li>
        <li>
          Tomoshabindan ushbu Oferta va Saytda keltirilgan boshqa qoidalarga
          muvofiq barcha protseduralarga rioya qilishni talab qilish;
        </li>
        <li>
          Agarda tadbir boshlangunga qadar bo‘sh joylar tugab qolsa (mavjud
          bo‘lmasa) Tomoshabinning joyni almashtirish to‘g‘risidagi talabini rad
          etish;
        </li>
        <li>
          Amaldagi qonunchilikka binoan boshqa huquqlarga ega bo‘lishi mumkin.
        </li>
      </ul>
      <p className="text-justify leading-relaxed mb-4 font-semibold">
        <span className="font-semibold">5.4.</span> Sotuvchi quyidagilarga
        majbur:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Tadbir haqidagi to‘liq ma’lumotni Tomoshabinga taqdim etish;</li>
        <li>
          Tomoshabin to‘lovni to‘g‘ri amalga oshirganidan so‘ng unga Elektron
          chiptani taqdim etish, bunda elektron chipta Tomoshabin tomonidan
          ko‘rsatilgan shaxsiy elektron manzilga yoki telegram messenjeri orqali
          ko‘rsatilgan manzilga tashlab beriladi.
        </li>
        <li>
          Agarda Tadbir ko‘chirishga yoki bekor qilishga to‘g‘ri kelib qolsa bu
          haqidagi tegishli ma’lumotlarni Saytga joylashtirish yoki mavjud
          bo‘lgan boshqa usullar orqali ushbu xabarni Tomoshabinga yetkazishi
          kerak. Shu bilan birga, agarda Tomoshabin bilan bog‘lanishning imkoni
          bo‘lmasa (masalan, Tomoshabin noto‘g‘ri yoki aniq bo‘lmagan
          ma’lumotlarni taqdim etgan bo‘lsa va/yoki boshqa sabablarga ko‘ra
          bog‘lanishning iloji bo‘lmasa va/yoki telefon yoki elektron pochta
          orqali o‘ziga yuborilgan ma’lumotlarni kuzatmasa), u bu ma’lumotlarni
          mustaqil ravishda Saytdan yoki Sotuvchining call-markazidan olishi
          lozim;
        </li>
        <li>
          Tomoshabinning shaxsiy ma’lumotlarini uning roziligisiz ushbu ofertada
          nazarda tutilmagan maqsadlarda ishlatmaslik;
        </li>
        <li>
          Amaldagi qonun hujjatlarida nazarda tutilgan boshqa majburiyatlarga
          ham ega bo‘lishi mumkin.
        </li>
      </ul>

      <h3 className="text-center font-semibold text-xl mb-3">
        VI. JAVOBGARLIK
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.1.</span>
         Ushbu kelishuv shartlarini bajarmaslik yoki lozim darajada bajarmaslik
        uchun tomonlar O‘zbekiston Respublikasining amaldagi qonunchiligiga
        muvofiq javobgar bo‘ladilar.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.2.</span>
         Sotuvchi Tadbirning sanasi, vaqti va joyiga chiptalarning mavjud
        emasligi yoki kerakli narx toifasidagi chiptalarning yo‘qligi sababli
        Tomoshabinga xizmatlarni taqdim etishning iloji bo‘lmagan hollarda
        javobgarlikni o‘z zimmasiga olmaydi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.3.</span>
         Agar ushbu kelishuv shartlarini bajarishning imkonsizligi yoki lozim
        darajada bajarilmasligi tomonlarning irodasi va istagidan tashqarida
        bo‘lgan hamda oldini olish, bartaraf etish yoxud oldindan ko‘ra olish
        imkoni bo‘lmagan holatlar (fors-major holatlari) bilan bog‘liq bo‘lsa,
        tomonlar javobgarlikka tortilmaydi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.4.</span>
         Sotuvchi Saytning ishlamay qolishi, vaqtinchalik uzilishlar yoki
        Sotuvchining o‘ziga bog‘liq bo‘lmagan sabablar bilan bog‘liq holatlarda,
        shuningdek, aloqa va energiya ta’minoti xizmatlarini ko‘rsatuvchi
        uchinchi shaxslarning harakatlari va/yoki harakatsizligi natijasida
        Saytga kirish/ulanish imkoniyatining vaqtincha mavjud emasligi uchun
        Tomoshabinga hech qanday zararlarni qoplamaydi va javobgarlikni
        zimmasiga olmaydi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.5.</span>
         Tomoshabin O‘zbekiston Respublikasining amaldagi qonunchiligiga muvofiq,
        noto‘g‘ri yoki ataylab yolg‘on ma’lumotlarni taqdim etish natijasida
        yuzaga kelgan oqibatlar uchun, shuningdek, bunday harakatlar natijasida
        boshqa shaxslarning huquq va manfaatlarini buzganlik uchun javobgar
        bo‘ladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.6.</span>
         Tomoshabin ushbu Oferta bo‘yicha to‘lovlarni amalga oshirishda bank
        kartalari yoki boshqa to‘lov vositalaridan noqonuniy foydalanish uchun
        O‘zbekiston Respublikasining amaldagi qonunchiligiga muvofiq
        javobgarlikka tortiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.7.</span>
         Tomoshabin boshqa shaxsning Elektron chiptasini noqonuniy egallab olish,
        qo‘lga kiritish, Saytni buzish, Sotuvchining yoki boshqa shaxsning
        elektron pochtasini, telegram messenjeridagi hisobi(akkaunti)ni buzish
        holatlari uchun O‘zbekiston Respublikasining amaldagi qonunchiligiga
        muvofiq javobgarlikka tortiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.8.</span>
         Tomoshabin o‘z ma’lumotlarida xato qilish yoki noaniqliklarga yo‘l
        qo‘yish natijasida yuzaga keladigan barcha tijoriy xatarlar, shuningdek,
        Elektron chiptasining yo‘qolishi bilan bog‘liq xavflarni o‘z zimmasiga
        oladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.9.</span>
         Agar Tomoshabin Chiptalarni Sotuvchining Saytidan tashqari joylarda (pul
        to‘lash orqali yoki bepul) sotib olgan bo‘lsa, u bunday harakatlar
        natijasida yuzaga keladigan barcha xatarlar va zararni o‘z zimmasiga
        oladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.10.</span>
         Tomoshabin ushbu Oferta 1.4-bandida belgilangan majburiyatlarini buzgan
        taqdirda, jabrlangan shaxs va Sotuvchi oldidagi barcha zararni to‘liq
        qoplash majburiyatini oladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.11.</span>
         Sotuvchi, Tomoshabin tomonidan chipta(lar)ni olish, ular uchun to‘lovni
        amalga oshirish va chiptani sotib olish bilan bog‘liq boshqa harakatlar
        tartibi haqidagi ma’lumotlarni noto‘g‘ri tushunishi yoki tushunmasligi
        natijasida Tomoshabin ko‘rgan har qanday zarar va ma’naviy ziyon uchun
        javobgar emas.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.12.</span>
         Sotuvchi, Tomoshabinning shaxsiy ma’lumotlariga ruxsatsiz kirish
        natijasida yuzaga kelgan zararlari, shu jumladan, boy berilgan foydasi
        uchun javobgar emas, bundan Sotuvchi ushbu ma’lumotlarni saqlash va
        himoya qilish bo‘yicha qonunda nazarda tutilgan barcha choralarni
        ko‘rmaganlik holatlari mustasno.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">6.13.</span>
         Agarda Tomonlar o‘z majburiyatlarini mavjud sharoitlarda oldini olish
        imkoni bo‘lmagan favqulodda holatlar, yengib bo‘lmas kuch (fors-major
        holati) natijasida to‘liq yoki qisman bajara olmasalar bunday bajara
        olmaganliklari uchun javobgarlikdan ozod etiladi. Fors-major holatlarga
        quyidagilar kiradi: tabiiy ofatlar, harbiy harakatlar, ish tashlashlar,
        davlat hokimiyati organlarining harakatlari va qarorlari,
        telekommunikatsiya va energetika tarmoqlaridagi uzilishlar.
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">
        VII. SHAXSGA DOIR MA’LUMOTLARNI QAYTA ISHLASH
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">7.1.</span> Ofertaning shartlarini qabul
        qilish orqali Tomoshabin O‘zbekiston Respublikasi qonunchiligiga
        muvofiq, Sotuvchiga taqdim etilgan ma’lumotlar va/yoki uning shaxsga
        doir ma’lumotlarini avtomatlashtirilgan yoki avtomatlashtirilmagan
        vositalar yordamida qayta ishlashga rozilik bildiradi, jumladan,
        yig‘ish, yozib olish, tizimlashtirish, jamlash, saqlash, aniqlash
        (yangilash, o‘zgartirish), olish, foydalanish, uzatish, taqdim etish,
        shaxsni aniqlash, bloklash, o‘chirish, yo‘q qilish maqsadlarida. Ushbu
        ma’lumotlar Sotuvchining chiptalarni sotish bilan bog‘liq
        majburiyatlarini bajarish va ushbu Ofertada nazarda tutilgan boshqa
        majburiyatlarni bajarish (jumladan, Tomoshabin tomonidan qaytarish
        bo‘yicha murojaat qilganda) hamda noqonuniy yo‘llar bilan olingan
        mablag‘larni legallashtirishga qarshi kurash bo‘yicha normativ
        hujjatlarning talablari bajarilishi uchun ishlatiladi. Tomoshabin
        tomonidan taqdim etilgan ma’lumotlarning foydalanish muddati
        cheklanmagan. Tomoshabin Tizimdagi ro‘yxatini bekor qilish va uning
        shaxsiy ma’lumotlarini qaytarib olish to‘g‘risida ariza bilan murojaat
        qilganda, Sotuvchi ushbu ma'lumotlarni yo‘q qiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">7.2.</span>Tomoshabin Sotuvchiga taqdim
        etilgan ma’lumotlarni va/yoki uning shaxsiy ma’lumotlarini Sotuvchi
        tomonidan telefon raqami yoki elektron pochta manzili orqali axborot
        tarqatish (psixologik yoki biznes treyninglar, mahorat darslari
        (masterklaslar), taklifnomalar va boshqalar haqida ma’lumotlar) uchun
        cheklanmagan muddat davomida qayta ishlash va foydalanishga rozilik
        bildiradi. Tomoshabin bu xabarlarni olishdan voz kechish to‘g‘risida
        yozma yoki elektron shaklda xabarnoma yuborganidan so‘ng bu xizmatlar
        to‘xtatiladi.
      </p>

      {/* Section VIII */}
      <h3 className="text-center font-semibold text-xl mb-3">
        VIII. NIZOLARNI HAL QILISH TARTIBI
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">8.1.</span> Ushbu Oferta shartlari
        asosida tuzilgan kelishuvni bajarishda yuzaga keladigan nizolar da’vo
        tartibida hal qilinadi. Da’vo Sotuvchiga uning manziliga yozma shaklda,
        nizoga sabab bo‘lgan holat yuzaga kelgan kundan boshlab 10 kun ichida
        taqdim etilishi lozim.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">8.2.</span> Agar tomonlar o‘rtasidagi
        nizolar va kelishmovchiliklar muzokaralar yo‘li bilan hal etilmasa, ular
        Sotuvchi joylashgan joydagi sud orqali hal qilinadi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">8.3.</span> Ushbu Ofertada nazarda
        tutilmagan boshqa barcha holatlar bo‘yicha tomonlar O‘zbekiston
        Respublikasining amaldagi qonunchiligiga amal qiladilar.
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">
      IX. OFERTA O‘ZGARISHI VA BEKOR QILINISHI TARTIBI
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">9.1.</span> Ushbu Oferta Saytda joylashtirilgan kundan boshlab kuchga kiradi va tomonlar o‘z majburiyatlarini bajarib bo‘lgunga qadar amal qiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">9.2.</span> Agar ushbu Ofertaning bir yoki bir nechta qoidalari O‘zbekiston Respublikasining amaldagi qonunchiligiga o‘zgartirishlar kiritilishi sababli bekor qilingan bo‘lsa yoki yaroqsiz deb topilsa, bu holat Ofertaning qolgan qoidalarini bekor qilish uchun asos bo‘lmaydi. Bekor qilingan qoidalar qonunchilikda ruxsat etilgan qoidalar bilan almashtirilishi kerak.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">9.3.</span> Ushbu Ofertada nazarda tutilmagan barcha holatlar bo‘yicha tomonlar Saytda joylashtirilgan qoidalar va O‘zbekiston Respublikasining amaldagi qonunchiligiga amal qiladilar.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">9.4.</span> Tomoshabin ushbu shartnomadagi huquq va majburiyatlarini Sotuvchining roziligisiz uchinchi shaxslarga o‘tkazish huquqiga ega emas.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">9.5.</span> Tomonlar ushbu Ofertada ko‘rsatilgan manzillar bo‘yicha yozma shaklda yuborilgan har qanday bildirishnoma va yozishmalarni to‘g‘ri yuborilgan deb hisoblaydilar. Shu bilan birga, tomonlar quyidagi bildirishnoma usullarini ham to‘g‘ri deb hisoblaydilar:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Tadbir o‘tkazilish shartlari (sana, vaqt, joy, dastur va h.k.), Tizim qoidalari, Oferta matni va keng ommaga taalluqli boshqa ma’lumotlarga oid o‘zgarishlar haqida Saytga ma’lumot joylashtirish orqali.</li>
        <li>Telefon va Tomoshabinning elektron pochta manzili/telegram messenjeri orqali – keng ommaga taalluqli yoki shaxsan Tomoshabinga tegishli har qanday voqealar haqida bildirish uchun.</li>
      </ul>

      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">9.6.</span> “Ish kunlari” deb dushanbadan shanbagacha bo‘lgan kunlar hisoblanadi, O‘zbekiston Respublikasida rasmiy ravishda bayram va/yoki dam olish kuni deb e’lon qilingan kunlar bundan mustasno.
      </p>


      <h3 className="text-center font-semibold text-xl mb-3">
      X. REKVIZITLAR. ALOQA
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">10.1.</span> Ushbu Oferta bo‘yicha barcha takliflar, savollar va bildirishnomalar <span className="bg-yellow-300">norbekovforum.com</span> manziliga yuborilishi lozim.
      </p>
      <button
        onClick={scrollToBottom}
        className="fixed bottom-5 right-5 bg-blue-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-blue-700 focus:outline-none transition-all"
        style={{ zIndex: 1000 }}
      >
        ↓
      </button>

      <button
        onClick={handleClick}
        className="mt-6 w-1/2 bg-blue-500 text-white py-2 mx-auto rounded-md hover:bg-blue-700"
      >
      Davom ettirish
      </button>
    </div>
  );
};

export default Oferta;
