import React from 'react';
import { useNavigate } from 'react-router-dom';

const Oferta = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/course-info');
  };

  return (
    <div className="font-serif max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-center font-bold text-2xl mb-4">OMMAVIY OFERTA</h2>
      <p className="text-justify leading-relaxed mb-4">
        Mazkur «Psixologik va biznes treyning tadbiriga chipta sotish xizmatlarini ko‘rsatish shartlari to‘g‘risidagi kelishuv» (keyingi o‘rinlarda – «Kelishuv/Shartnoma» deb yuritiladi) O‘zbekiston Respublikasi Fuqarolik kodeksining 358 va 369-moddalariga muvofiq, «NORBEKOV SOG‘LOMLASHTIRISH VA MASLAHAT MARKAZI» MChJ tomonidan tuzilgan ommaviy oferta hisoblanadi (keyingi o‘rinlarda «Sotuvchi» deb yuritiladi) va ushbu chipta sotish Sotuvchi Sayti orqali tadbirlarga chipta sotib olishni xohlagan har qanday shaxsga (keyingi o‘rinlarda «Tomoshabin») yo‘naltirilgan.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        Mazkur ommaviy oferta chiptalarni sotib olish va qaytarish shartlarini, shuningdek, Sotuvchi va Tomoshabin o‘rtasida yuzaga keladigan huquq va majburiyatlarni tartibga soladi. Tomoshabin Sayt orqali chiptalarni sotib olishdan avval mazkur ofertaning shartlari bilan tanishishi shart. Agar Tomoshabin mazkur ofertaning shartlarini to‘liq qabul qilmasa, u chiptalarni Sayt orqali sotib olmasligi lozim.
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">ATAMALAR VA TA’RIFLAR</h3>
      <p className="text-justify leading-relaxed mb-4">
        Mazkur ommaviy ofertada (keyingi o‘rinlarda – «Oferta») quyidagi atamalar va ta’riflar bir xil mazmunda birlik va ko‘plik shakllarda qo‘llaniladi:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Sotuvchi</strong> - “NORBEKOV SOG‘LOMLASHTIRISH VA MASLAHAT MARKAZI” MChJ, Toshkent shahar, Olmazor tumani, Yuqori Sebzor MFY, S-17/18-daha, 52A-uy manzilida joylashgan, mijozlarning buyurtmasi asosida chiptalarni sotish xizmatini ko‘rsatuvchi.</li>
        <li><strong>Xaridor/Tomoshabin</strong> - jismoniy va yuridik shaxslar.</li>
        <li><strong>Tadbir</strong> - ishtirokchilarga sog‘liqni tiklashning samarali usullari, insonning shaxsiy rivojlanishi, boshqaruv, kommunikatsiya, stressni boshqarish, jamoaviy ishlash kabi psixologik jihatlarni hamda biznes yuritish, moliyaviy boshqaruv, marketing va menejment kabi ko‘nikmalarni rivojlantirishga yo‘naltirilgan nazariy bilimlarni berish va ularni amaliy mashg‘ulotlar orqali mustahkamlashga qaratilgan treyning.</li>
        <li><strong>Oferta</strong> - sotuvchining nomuayyan shaxslar doirasiga chakana savdo-sotiq qilish yo‘li orqali korxona xizmatini sotib olish bo‘yicha sotuvchining shartlari doirasida shartnoma tuzishga yo‘llangan taklifdir.</li>
        <li><strong>Aksept</strong> - xaridor/Tomoshabin tomonidan ofertani to‘liq va shartlarsiz qabul qilish va shartnomani tuzilgan deb hisoblash.</li>
        <li><strong>Shartnoma</strong> - sotuvchining xizmatini sotib olish bo‘yicha sotuvchining shartlari bilan xaridorning tanishishi va roziligi asosida taklif etilayotgan xizmatni sotib olish bo‘yicha kelishuv.</li>
        <li><strong>Elektron chipta</strong> – iTicketga tegishli tizim tomonidan tayyorlangan hujjat bo‘lib, u Tomoshabin tomonidan Chipta uchun to‘lov amalga oshirilganligini, u chiptani Sotuvchining Saytidan olish huquqi borligini hamda Tadbirda ishtirok etish huquqiga egaligini tasdiqlanadi.</li>
      </ul>

      <h3 className="text-center font-semibold text-xl mb-3">I. UMUMIY QOIDALAR</h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">1.1.</span> Sotuvchi tomonidan sotilayotgan Chiptalar faqat ushbu Oferta shartlari asosida sotiladi va ular to‘liq va shartsiz qabul qilinadi. Tomoshabin tomonidan xizmatlardan foydalanish ushbu shartlarga qo‘shilishni bildiradi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">1.2.</span> Ushbu Oferta shartlari sayt orqali sotib oluvchi barcha Tomoshabinlar uchun bir xil amal qiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">1.3.</span> Sotuvchi ushbu Ofertaga istalgan vaqtda o‘zgartirishlar kiritishga haqli. Har qanday o‘zgarishlar saytda e’lon qilinadi. O‘zgartirishlardan keyin Sotuvchi xizmatlaridan foydalanish, ushbu o‘zgartirishlarni qabul qilishni bildiradi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">1.4.</span> Tomoshabin chiptalarni nusxalamaslik, qalbakilashtirmaslik yoki soxtalashtirmaslik yoxud tijorat maqsadlarida foydalanmaslik majburiyatini oladi, shuningdek, Elektron chiptani o‘z tovarlari (ishlari, xizmatlari) yoki uchinchi shaxsning tovarlari (ishlari, xizmatlari)ni reklama qilish maqsadida foydalanish huquqiga ega emas.
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">II. OFERTA SHARTNOMASINING PREDMETI</h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.1.</span> Mazkur ofertaning predmeti Tomoshabinga chiptalarni sotish xizmatlarini sayt orqali ushbu Ofertaning shartlariga muvofiq taqdim etishdan iborat.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.2.</span> Chiptalar Tadbir tashkilotchisining nomidan sotiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.3.</span> Sotuvchi Tomoshabinga sayt orqali chiptalarni sotishda (keyingi o‘rinlarda «onlayn sotuvlar») quyidagi xizmatlarni ko‘rsatadi:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Tomoshabinga axborot ko‘magi (Tadbir, uning o‘tkaziladigan joyi, vaqti, sxemasi va h.k. haqidagi ma’lumotlarni Sayt va telegram messenjeri orqali taqdim etish);</li>
        <li>Onlayn to‘lov imkoniyati;</li>
        <li>Elektron chiptani shakllantirish va uni Tomoshabin ko‘rsatgan elektron manzilga yuborish.</li>
      </ul>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.4.</span> Xizmatlar ushbu Ofertada belgilangan tartib va shartlar asosida taqdim etiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.5.</span> Tomoshabin tadbirga chipta sotib olish orqali Tomoshabin va Sotuvchi o‘rtasida tuzilgan shartnomaga muvofiq barcha huquq va majburiyatlar bevosita Tomoshabin va Sotuvchi o‘rtasida yuzaga keladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">2.6.</span> Tomoshabin va Tadbir Sotuvchisi o‘rtasida tuzilgan shartnomaning barcha shartlari, jumladan, tadbir nomi, sanasi, o‘tkazilish joyi va vaqti, tadbirga kirishda metall detektorlari ishlatilishi, tadbirga olib kirilishi taqiqlangan buyumlar ro‘yxati, chiptaning qiymati, chiptani qaytarish shartlari va boshqalar Sotuvchi tomonidan Tadbir haqida e’lon qilinishida Saytda ko‘rsatiladi.
      </p>

      <h3 className="text-center font-semibold text-xl mb-3">III. OFERTANI AKSEPTLASH</h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">3.1.</span> Tomoshabin Ofertani aksept qilishdan oldin, ushbu ofertaning barcha shartlarini to‘liq tushunganiga hamda ularni so‘zsiz va to‘liq qabul qilganiga ishonch hosil qilishi kerak.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">3.2.</span> Tomoshabin ushbu ofertani Tizim orqali (onlayn sotuvlar) qabul qilish (aksept qilish) quyidagi ketma-ket harakatlar orqali amalga oshiriladi:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li><span className='font-semibold'>“norbekovforum.com”</span> saytiga kirish;</li>
        <li>Tadbir o‘tkaziladigan joydagi mavjud o‘rindiqni tanlash;</li>
        <li>“Menejersiz to‘lov qilish” tugmasini bosish;</li>
        <li>Ochilgan sahifadagi mos maydonlarga kerakli ma’lumotlarni kiritish: familiya, ism, mobil telefon raqami va/yoki elektron pochta manzili (example@example.uz shaklida);</li>
        <li>Oferta shartlarini qabul qilish uchun tugmani bosish;</li>
        <li>Sahifaning pastki qismida 3 ta to‘lov qilish usuli chiqadi: <span className='font-semibold'>CLICK</span>, <span className='font-semibold'>PAY ME</span> va <span className='font-semibold'>UZUM</span>;</li>
        <li>To‘lov amalga oshirilgandan so‘ng Tomoshabinga ham Sotuvchiga ham to‘lov amalga oshirilganligini tasdiqlovchi chek keladi;</li>
        <li>Sotuvchi tomonidan Tomoshabin ko‘rsatgan electron manzilga yoki telegram manziliga Elektron chipta yuboriladi, bu chiptani Tomoshabin chop etishi yoki mobil qurilmasida saqlashi mumkin.</li>
      </ol>

      <h3 className="text-center font-semibold text-xl mb-3">
        IV. CHIPTANI QAYTARISH YOKI ALMASHTIRISH SHARTLARI. TADBIR BEKOR QILINGAN, O‘ZGARTIRILGAN YOKI KO‘CHIRILGAN HOLATLARDA CHIPTA PULINI QAYTARISH TARTIBI
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.1.</span> Agar Tomoshabin Elektron chiptadan foydalanmagan bo‘lsa, ya’ni Tadbir boshlanishidan oldin uni Tadbir Sotuvchisiga taqdim etmagan bo‘lsa yoki Chiptadan Tadbirga tashrif buyurish uchun foydalanmagan bo‘lsa, Sotuvchi kompensatsiya to‘lamaydi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.2.</span> Agar Tomoshabin Elektron pochta manziliga yoki Telegram manziliga yuborilgan to‘lov tasdiqnomasini (chekni) va Elektron chiptani yo‘qotgan (tasodifan o‘chirib yuborgan) bo‘lsa, u Tadbir o‘tkazilishidan kamida bir kun oldin Saytda ko‘rsatilgan telefon raqamlariga qo‘ng‘iroq qilish yoki elektron pochta/telegram messenjeriga xabar yuborish orqali Sotuvchiga murojaat qilib Elektron chiptani qayta yuborishni so‘rashi mumkin. Sotuvchi Elektron chiptani qayta tiklash uchun murojaat qilgan shaxsdan Elektron chiptani sotib olayotganda kiritgan barcha ma’lumotlarni, shuningdek, shaxsni tasdiqlash bilan bog‘liq boshqa qo‘shimcha ma’lumotlarni taqdim etishni talab qilishi mumkin.
      </p>
      <p className="text-justify leading-relaxed mb-4">
      Tadbir o‘tkazilgandan so‘ng yoki Sotuvchi Tadbirni bekor qilish yoki ko‘chirish va chipta pulini qaytarish haqida e’lon qilganidan keyin Elektron chiptani yo‘qotish (tasodifan o‘chirish) haqidagi murojaatlar qabul qilinmaydi.

      </p>
      <p className="text-justify leading-relaxed mb-4 font-semibold">
        <span className="font-semibold">4.3.</span> Ushbu Oferta orqali Tomoshabin quyidagilar haqida ogohlantiriladi:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Sotuvchi Elektron chiptaning yo‘qolishi bilan bog‘liq xavflar uchun javobgar emas, shu jumladan, uni boshqa shaxslar tomonidan nusxa ko‘chirish yoki skanerlash holatlari uchun ham.</li>
        <li>Agar Tomoshabin avval Elektron chiptani olgan bo‘lsa va uni yo‘qotgan yoki tiklash uchun taqdim eta olmasa, Elektron chiptani tiklashni talab qilish huquqiga ega emas.</li>
      </ul>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.4.</span> Xarid qilingan chiptalar Sotuvchi tomonidan belgilangan hollarda va shartlarda almashtiriladi yoki qaytariladi. Bu shartlar Sotuvchi tomonidan Saytda Tadbir haqida e’lon qilingan holda ko‘rsatiladi.
Bunday hollarda pulni qaytarish uchun Tomoshabin Tadbir Sotuvchisiga qo‘ng‘iroq qilib, Elektron chiptani taqdim qilishi yoki agar Chipta avval olingan bo‘lsa, Chiptani topshirishi va pulni qaytarish bo‘yicha ariza yozishi kerak. Ariza, shuningdek, elektron chipta rasmiylashtirilganda ko‘rsatilgan elektron pochta manzilidan Sotuvchining elektron pochta manziliga yuborilishi lozim.

      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.5.</span> Tadbir ko‘chirilganda shuningdek, Tadbir bekor qilinganda, agar Tomoshabin bu o‘zgarishlarga rozi bo‘lmasa, Tomoshabin to‘langan Chiptaning to‘liq qiymatini qaytarib olish huquqiga ega.
      </p>
      <p className="text-justify leading-relaxed mb-4">
      Bunday hollarda pulni qaytarish uchun Tomoshabin Sotuvchiga Elektron chiptani taqdim qilishi yoki agar Chipta avval olingan bo‘lsa, Chiptani topshirishi va pulni qaytarish bo‘yicha ariza yozishi kerak (ariza blankasini Sotuvchi tomonidan taqdim etiladi). Ariza, shuningdek, Elektron chipta rasmiylashtirilganda ko‘rsatilgan elektron pochta manzilidan Sotuvchining elektron pochta manziliga yuborilishi lozim. Pul mablag‘lari Tomoshabinning arizasi ko‘rib chiqilgan sanadan boshlab ikki ish haftasi davomida Tomoshabinning plastik kartasiga tashlab beriladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">4.6.</span> Ko‘chirilgan tadbirlar uchun pulni qaytarish arizasi Tadbir boshlanishiga 72 (yetmish ikki) soat qolgunga qadar qabul qilinadi va Chiptani qaytarish bo‘yicha ariza imzolangan kundan boshlab ikki ish haftasi ichida amalga oshiriladi.
      </p>

      {/* Section V */}
      <h3 className="text-center font-semibold text-xl mb-3">
        V. TOMONLARNING HUQUQ VA MAJBURIYATLARI
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">5.1.</span> Tomoshabin quyidagi huquqlarga ega:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Chiptani to‘lov amalga oshirilgandan so‘ng olish huquqiga ega.</li>
        <li>Sotuvchining vakolatlari doirasida chiptalarni sotish qoidalari va Tadbir haqidagi ma’lumotlarni olish huquqiga ega.</li>
        <li>Taklif qilingan to‘lov usullaridan birini tanlash huquqiga ega.</li>
        <li>Sotuvchining faoliyati haqida fikr-mulohazalarini, taklif va shikoyatlarini yuborish huquqiga ega.</li>
      </ul>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">5.2.</span> Tomoshabin quyidagilarga majbur:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Chiptani sotib olayotganda kerakli ma’lumotlarni to‘g‘ri taqdim etishi kerak.</li>
        <li>Tadbirning cheklovlari, shu jumladan, voyaga yetmagan bolalar ishtirokiga oid cheklovlar bilan tanishishi va ularni qabul qilishi shart.</li>
        <li>Chipta uchun belgilangan to‘lovning to‘liq qiymatini to‘lash majburiyatini oladi.</li>
        <li>Sotuvchining ish faoliyatiga zarar yetkazishi mumkin bo‘lgan noto‘g‘ri ma’lumotlarni tarqatmasligi lozim.</li>
      </ul>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">5.3.</span> Sotuvchi quyidagi huquqlarga ega:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Tomoshabinga Tadbir haqida qo‘shimcha ma’lumot taqdim etish.</li>
        <li>Chipta narxini belgilash va o‘zgartirish huquqiga ega.</li>
        <li>Tomoshabindan ushbu Oferta va qoidalarga muvofiq protseduralarga rioya qilishni talab qilish huquqiga ega.</li>
      </ul>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">5.4.</span> Sotuvchi quyidagilarga majbur:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Tadbir haqidagi to‘liq ma’lumotni Tomoshabinga taqdim etish.</li>
        <li>To‘lov to‘g‘ri amalga oshirilgandan so‘ng Tomoshabinga Elektron chiptani taqdim etish.</li>
        <li>Tadbir bekor qilinganda yoki ko‘chirilganda bu haqdagi tegishli ma’lumotlarni Saytga joylashtirish.</li>
      </ul>

      <h3 className="text-center font-semibold text-xl mb-3">
        VII. SHAXSGA DOIR MA’LUMOTLARNI QAYTA ISHLASH
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">7.1.</span> Ofertaning shartlarini qabul qilish orqali Tomoshabin O‘zbekiston Respublikasi qonunchiligiga muvofiq, Sotuvchiga taqdim etilgan ma’lumotlar va/yoki uning shaxsga doir ma’lumotlarini avtomatlashtirilgan yoki avtomatlashtirilmagan vositalar yordamida qayta ishlashga rozilik bildiradi, jumladan, yig‘ish, yozib olish, tizimlashtirish, jamlash, saqlash, aniqlash (yangilash, o‘zgartirish), olish, foydalanish, uzatish, taqdim etish, shaxsni aniqlash, bloklash, o‘chirish, yo‘q qilish maqsadlarida. Ushbu ma’lumotlar Sotuvchining chiptalarni sotish bilan bog‘liq majburiyatlarini bajarish va ushbu Ofertada nazarda tutilgan boshqa majburiyatlarni bajarish (jumladan, Tomoshabin tomonidan qaytarish bo‘yicha murojaat qilganda) hamda noqonuniy yo‘llar bilan olingan mablag‘larni legallashtirishga qarshi kurash bo‘yicha normativ hujjatlarning talablari bajarilishi uchun ishlatiladi. Tomoshabin tomonidan taqdim etilgan ma’lumotlarning foydalanish muddati cheklanmagan. Tomoshabin Tizimdagi ro‘yxatini bekor qilish va uning shaxsiy ma’lumotlarini qaytarib olish to‘g‘risida ariza bilan murojaat qilganda, Sotuvchi ushbu ma'lumotlarni yo‘q qiladi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">7.2.</span>Tomoshabin Sotuvchiga taqdim etilgan ma’lumotlarni va/yoki uning shaxsiy ma’lumotlarini Sotuvchi tomonidan telefon raqami yoki elektron pochta manzili orqali axborot tarqatish (psixologik yoki biznes treyninglar, mahorat darslari (masterklaslar), taklifnomalar va boshqalar haqida ma’lumotlar) uchun cheklanmagan muddat davomida qayta ishlash va foydalanishga rozilik bildiradi. Tomoshabin bu xabarlarni olishdan voz kechish to‘g‘risida yozma yoki elektron shaklda xabarnoma yuborganidan so‘ng bu xizmatlar to‘xtatiladi. 
      </p>

      {/* Section VIII */}
      <h3 className="text-center font-semibold text-xl mb-3">
        VIII. NIZOLARNI HAL QILISH TARTIBI
      </h3>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">8.1.</span> Ushbu Oferta shartlari asosida tuzilgan kelishuvni bajarishda yuzaga keladigan nizolar da’vo tartibida hal qilinadi. Da’vo Sotuvchiga uning manziliga yozma shaklda, nizoga sabab bo‘lgan holat yuzaga kelgan kundan boshlab 10 kun ichida taqdim etilishi lozim.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">8.2.</span> Agar tomonlar o‘rtasidagi nizolar va kelishmovchiliklar muzokaralar yo‘li bilan hal etilmasa, ular Sotuvchi joylashgan joydagi sud orqali hal qilinadi.
      </p>
      <p className="text-justify leading-relaxed mb-4">
        <span className="font-semibold">8.3.</span> Ushbu Ofertada nazarda tutilmagan boshqa barcha holatlar bo‘yicha tomonlar O‘zbekiston Respublikasining amaldagi qonunchiligiga amal qiladilar.
      </p>

      <button onClick={handleClick} className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
        Komol
      </button>
    </div>
  );
};

export default Oferta;
