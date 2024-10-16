import config from "./config.js";

export async function fetchPost( email ) {
    try {

        const response = await fetch(`${config.apiUrl}/unisender`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })

        if (!response.ok) {
            const errorData = await response.json(); // Получаем данные ошибки
            throw new Error(errorData.message || 'Ошибка при отправке данных'); // Генерируем ошибку с сообщением
        }

        return { success: true };
    }
    catch (error) {
        console.log(error)
        return { success: false, message: error.message };
    }
}
