import React from 'react';

const HizmetPolitikamiz = () => {
    return (
        <section className="hizmet-politikamiz-section">
            <div className="container">
                <h2 className="section-title">Hizmet Politikamız</h2>
                <div className="section-underline"></div>
                <div className="hizmet-politikamiz-content">
                    <div className="policy-item">
                        <div className="icon">
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>En Uygun Fiyat</h3>
                        <p>
                            Tüm hizmetlerinde en uygun fiyat politikası ile yola çıkan firmamız, tüm ilçelere tek fiyata hizmet vermektedir.
                            Hizmetlerimiz hakkında bilgi ve fiyat teklifi almak için, iletişim sayfamızda yer alan numaralardan bize ulaşabilirsiniz.
                        </p>
                    </div>
                    <div className="policy-item">
                        <div className="icon">
                            <i className="fas fa-thumbs-up"></i>
                        </div>
                        <h3>%100 Müşteri Memnuniyeti</h3>
                        <p>
                            Mobil Su Tesisatçısı; 30 yılı aşkın süredir profesyonel hizmet vermekte olup, müşteri memnuniyetini her zaman ön planda tutmaktadır.
                            Memnun müşterilerimiz ile büyümeye devam diyerek, bizi tercih eden tüm müşterilerimize teşekkür ederiz.
                        </p>
                    </div>
                    <div className="policy-item">
                        <div className="icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <h3>Biz Kimiz</h3>
                        <p>
                            Mobil Su Tesisatçısı, 30 yılı aşkın süredir İstanbul, Ankara ve İzmir'in tüm bölgelerinde, Avrupa’dan getirdiği son teknoloji cihazlarla
                            su kaçağı bulma, tıkanıklık açma ve petek temizleme hizmetleri sunmaktadır.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HizmetPolitikamiz;