import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const giftCards = [
  {
    id: 1,
    amount: 500,
    price: 500,
    discount: null,
    popular: false,
  },
  {
    id: 2,
    amount: 1000,
    price: 1000,
    discount: null,
    popular: true,
  },
  {
    id: 3,
    amount: 3000,
    price: 3000,
    discount: null,
    popular: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 apple-blur bg-white/80 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Icon name="Gift" size={24} className="text-apple-blue" />
              <span className="text-xl font-semibold text-apple-dark">
                Apple Gift Cards
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#catalog"
                className="text-sm text-gray-600 hover:text-apple-dark transition-colors"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="text-sm text-gray-600 hover:text-apple-dark transition-colors"
              >
                О нас
              </a>
              <a
                href="#faq"
                className="text-sm text-gray-600 hover:text-apple-dark transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contacts"
                className="text-sm text-gray-600 hover:text-apple-dark transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
          <Button variant="outline" size="sm" className="hidden md:block">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-apple-dark mb-6 tracking-tight">
            Apple Gift Cards
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Подарите возможность выбора из миллионов песен, фильмов, приложений
            и игр в App Store, iTunes Store и Apple Books
          </p>
          <Button
            size="lg"
            className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-3 text-base"
          >
            Выбрать подарочную карту
          </Button>
        </div>
      </section>

      {/* Gift Cards Catalog */}
      <section id="catalog" className="py-16 px-4 bg-apple-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center text-apple-dark mb-12">
            Выберите номинал
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {giftCards.map((card) => (
              <Card
                key={card.id}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 ${card.popular ? "ring-2 ring-apple-blue" : ""}`}
              >
                {card.popular && (
                  <Badge className="absolute top-4 right-4 bg-apple-blue text-white px-3 py-1">
                    Популярный
                  </Badge>
                )}
                <CardContent className="p-8 text-center gradient-card h-56 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-50"></div>
                  <div className="relative z-10">
                    <div className="mb-4">
                      <img
                        src="/img/0dddb99e-1c9d-45a7-bbac-d745adaf4686.jpg"
                        alt="Apple Gift Card"
                        className="w-16 h-16 mx-auto object-cover rounded-lg mb-3 shadow-sm"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-apple-dark mb-2">
                      {card.amount}₽
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Подарочная карта Apple
                    </p>
                    <Button
                      className="w-full bg-apple-dark hover:bg-gray-800 text-white"
                      size="sm"
                    >
                      Купить за {card.price}₽
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-apple-dark mb-8">
            О подарочных картах Apple
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="Zap"
                size={32}
                className="mx-auto text-apple-blue mb-4"
              />
              <h3 className="text-lg font-medium text-apple-dark mb-2">
                Мгновенная доставка
              </h3>
              <p className="text-gray-600 text-sm">
                Получите код карты на email сразу после оплаты
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Shield"
                size={32}
                className="mx-auto text-apple-blue mb-4"
              />
              <h3 className="text-lg font-medium text-apple-dark mb-2">
                100% гарантия
              </h3>
              <p className="text-gray-600 text-sm">
                Все карты проверены и гарантированно активны
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Headphones"
                size={32}
                className="mx-auto text-apple-blue mb-4"
              />
              <h3 className="text-lg font-medium text-apple-dark mb-2">
                Поддержка 24/7
              </h3>
              <p className="text-gray-600 text-sm">
                Помощь в любое время по всем вопросам
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-apple-gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-apple-dark mb-12">
            Часто задаваемые вопросы
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left">
                <span className="text-lg font-medium text-apple-dark">
                  Как быстро я получу код карты?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-600">
                  Код подарочной карты приходит на email мгновенно после
                  подтверждения оплаты.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left">
                <span className="text-lg font-medium text-apple-dark">
                  В каких странах действуют карты?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-600">
                  Наши подарочные карты действуют в российском App Store и
                  iTunes Store.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left">
                <span className="text-lg font-medium text-apple-dark">
                  Есть ли срок действия у карт?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-600">
                  Подарочные карты Apple не имеют срока действия и могут быть
                  использованы в любое время.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left">
                <span className="text-lg font-medium text-apple-dark">
                  Какие способы оплаты доступны?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-600">
                  Мы принимаем банковские карты, СБП, Яндекс.Деньги и другие
                  популярные способы оплаты.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b-0">
              <AccordionTrigger className="hover:no-underline py-6 px-6 text-left">
                <span className="text-lg font-medium text-apple-dark">
                  Можно ли вернуть подарочную карту?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-600">
                  Возврат возможен в течение 14 дней, если карта не была
                  активирована.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-apple-dark mb-8">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Mail"
                  size={24}
                  className="mx-auto text-apple-blue mb-3"
                />
                <h3 className="font-medium text-apple-dark mb-2">
                  Email поддержка
                </h3>
                <p className="text-gray-600 text-sm">
                  support@applegiftcards.ru
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MessageCircle"
                  size={24}
                  className="mx-auto text-apple-blue mb-3"
                />
                <h3 className="font-medium text-apple-dark mb-2">
                  Telegram чат
                </h3>
                <p className="text-gray-600 text-sm">@applegiftcards_support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Apple Gift Cards. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
