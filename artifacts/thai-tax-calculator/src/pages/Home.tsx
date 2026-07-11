import { Link } from 'wouter';
import { FileText, Briefcase, User, CalendarDays, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border py-6 px-6 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <div className="bg-primary p-2.5 rounded-xl text-primary-foreground shadow-md">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground leading-none">ThaiTax</h1>
            <p className="text-sm text-muted-foreground mt-1 font-medium">โปรแกรมคำนวณภาษีเงินได้บุคคลธรรมดา</p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            เลือกแบบฟอร์มภาษีของคุณ
          </h2>
          <p className="text-lg text-muted-foreground">
            คำนวณภาษีเงินได้ประจำปีอย่างแม่นยำ พร้อมแสดงรายละเอียดรายขั้น เพื่อการวางแผนการเงินที่ดีกว่า
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <Link href="/91" className="group block h-full">
            <div className="bg-card hover:border-primary/50 border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
              
              <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl w-fit mb-6">
                <User className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">ภ.ง.ด. 91</h3>
              <p className="font-semibold text-primary/80 mb-4">สำหรับมนุษย์เงินเดือน</p>
              
              <p className="text-muted-foreground text-sm flex-1 mb-8">
                ผู้มีรายได้จากงานประจำเพียงอย่างเดียว (มาตรา 40(1)) เช่น เงินเดือน โบนัส ค่าล่วงเวลา
              </p>
              
              <div className="flex items-center text-primary font-medium text-sm mt-auto">
                เริ่มต้นคำนวณ <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link href="/90" className="group block h-full">
            <div className="bg-card hover:border-primary/50 border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
              
              <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-3 rounded-xl w-fit mb-6">
                <Briefcase className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">ภ.ง.ด. 90</h3>
              <p className="font-semibold text-primary/80 mb-4">สำหรับผู้มีรายได้หลายทาง</p>
              
              <p className="text-muted-foreground text-sm flex-1 mb-8">
                ผู้มีรายได้ประเภทอื่นๆ หรือมีทั้งเงินเดือนและรายได้อื่นร่วมด้วย (มาตรา 40(1) - 40(8)) ฟรีแลนซ์ พ่อค้าแม่ค้า ดอกเบี้ย ค่าเช่า
              </p>
              
              <div className="flex items-center text-primary font-medium text-sm mt-auto">
                เริ่มต้นคำนวณ <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link href="/94" className="group block h-full">
            <div className="bg-card hover:border-primary/50 border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
              
              <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 p-3 rounded-xl w-fit mb-6">
                <CalendarDays className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">ภ.ง.ด. 94</h3>
              <p className="font-semibold text-primary/80 mb-4">ภาษีครึ่งปี</p>
              
              <p className="text-muted-foreground text-sm flex-1 mb-8">
                การยื่นภาษีกลางปี สำหรับผู้มีรายได้มาตรา 40(5) - 40(8) ที่เกิดขึ้นในช่วงครึ่งปีแรก (ม.ค. - มิ.ย.)
              </p>
              
              <div className="flex items-center text-primary font-medium text-sm mt-auto">
                เริ่มต้นคำนวณ <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

        </div>
      </main>
      
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        <p>เครื่องมือคำนวณเบื้องต้นเพื่อการวางแผนภาษี ไม่สามารถใช้เป็นหลักฐานอ้างอิงทางกฎหมายกับกรมสรรพากรได้</p>
      </footer>
    </div>
  );
}
