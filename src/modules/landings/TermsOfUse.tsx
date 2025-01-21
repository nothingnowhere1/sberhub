import React from 'react';
import {styles} from "./styles/LandingStyles";
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";

export const TermsOfUse = () => {


    const sections = [
        {
            title: "1. Общие положения",
            content: "Настоящие Условия пользования регулируют отношения между пользователем и компанией при использовании нашего сервиса. Используя наш сервис, вы соглашаетесь с данными условиями в полном объёме."
        },
        {
            title: "2. Регистрация аккаунта",
            content: "Для использования сервиса необходимо создать учетную запись. Вы обязуетесь предоставить достоверную информацию при регистрации и поддерживать её актуальность. Вы несете ответственность за сохранность своих учетных данных."
        },
        {
            title: "3. Правила использования",
            content: "При использовании сервиса запрещается:",
            list: [
                "Нарушать права других пользователей",
                "Распространять спам и вредоносное ПО",
                "Использовать сервис в противозаконных целях",
                "Создавать множественные учетные записи"
            ]
        },
        {
            title: "4. Конфиденциальность",
            content: "Мы обязуемся защищать вашу личную информацию в соответствии с нашей Политикой конфиденциальности. Собранные данные используются исключительно для улучшения качества сервиса и не передаются третьим лицам без вашего согласия."
        },
        {
            title: "5. Ответственность",
            content: "Компания не несет ответственности за:",
            list: [
                "Прерывания в работе сервиса по техническим причинам",
                "Действия третьих лиц",
                "Потерю данных по независящим от нас причинам"
            ]
        },
        {
            title: "6. Изменение условий",
            content: "Мы оставляем за собой право изменять данные условия пользования в любое время. Продолжая использовать сервис после внесения изменений, вы принимаете новые условия."
        },
        {
            title: "7. Контакты",
            content: "По всем вопросам, связанным с использованием сервиса, вы можете обратиться в службу поддержки:",
            contact: {
                email: "support@example.com",
                phone: "8-800-123-45-67"
            }
        }
    ];

    return (
        <>
            <Header/>
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.header}>
                        <h1 style={styles.title}>Условия пользования</h1>
                        <p style={styles.date}>Последнее обновление: 21 января 2025 г.</p>
                    </div>

                    {sections.map((section, index) => (
                        <div key={index} style={styles.section}>
                            <h2 style={styles.sectionTitle}>{section.title}</h2>
                            <p style={styles.content}>{section.content}</p>

                            {section.list && (
                                <ul style={styles.list}>
                                    {section.list.map((item, itemIndex) => (
                                        <li key={itemIndex} style={styles.listItem}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.contact && (
                                <div style={styles.contact}>
                                    <p style={styles.contactItem}>Email: {section.contact.email}</p>
                                    <p style={styles.contactItem}>Телефон: {section.contact.phone}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default TermsOfUse;