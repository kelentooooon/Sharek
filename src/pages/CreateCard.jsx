import twoCardsImage from '../assets/twocards.png';

const CreateCard = () => {
  return (
    <>
    <div className="min-h-screen" style={{backgroundColor: 'var(--color-white)'}}>
      
      {/* Header - Create Button */}
      <div className="text-center py-12">
        <button 
          className="px-12 py-4 rounded-full text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          style={{backgroundColor: 'var(--color-primary-green)'}}
        >
          إنشاء
        </button>
      </div>

      {/* Cards Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-8">
          <img src={twoCardsImage} alt="NFC Cards" className="w-96 h-auto" />
        </div>
      </div>

        {/* Themes Section */}
        


      {/* Bottom Section */}
      <div className="text-center px-8 pb-20">
        <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--color-primary-blue)'}}>
          اختر من بين 20 بروفايل
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed" style={{color: 'var(--color-gray)'}}>
            يقدم موقع شارك عدة تقنية NFC الطباعة المتقدمة في بطاقاتنا وتطبيقاته الجديدة في ما يخص عليك
            هاتفية هو بين رنين البطاقة أو في عهدي على المستخدم إيجاد، أو في حق جميع المعلومات اللي ثرية، في شارتي في
            بطاقة المال وصول معلومات قليلة للجميع
          </p>
        </div>
      </div>
      
    </div>

    </>
  );
};

export default CreateCard;