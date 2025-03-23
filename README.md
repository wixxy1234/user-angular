# UserApp

## Задачи для ангуляр проекта

- [x] Настроить маршрутизацию следующих страниц:
    - Авторизация / регистраций (`/auth`)
    - Основная страница - таблица пользователей (`/main`)

- [ ] Создать компонент `Authorization`, который будет в себе содержать еще два компонента `Registration` и `Login`. Суть компонента `Authorization` заключается в переключении логики и отображения компонента `Registration` и `Login`.

- [ ] Создать сервис `Auth`, в котором будет заложена логика взаимодействия с REST API, а именно с конечными точками в блоке `Authorization`, а также логика сохранения токена в `localStorage`.

- [x] Подключить библиотеку `ng-zorro`. При необходимости конкретных компонентов, использовать импорт модуля (пример: `import { NzTableModule } from 'ng-zorro-antd/table';`). Пример всех компонентов: https://ng.ant.design/components

- [ ] Создать компонент `Users`, в котором будет отрисована таблица пользователь с серверной пагинацией (то есть в API будет посылаться конкретная запрашиваемая **страница (page)** и **кол-во пользователей для ответа (rows)**).

- [ ] Создать кнопку **Создать пользователя (`CreateUser`)** над таблицей. Это будет модальное окно с формой добавления нового пользователя.

- [ ] В таблицу необходимо добавить колонку **Действия**, которая будет рисовать на каждой строке две кнопки: **Редактировать (`EditUser`)** и **Удалить (`DeleteUser`)**. В данные компоненты необходимо передавать ID пользователя для последущих запросов к API.

- [ ] Добавить всплывашки, суть которых отображать статус запрос к API. Например: **Данные получены за N секунд**, **Данные сохранены. ID: 356**, **Данные обновлены**, **Данные удалены**.

## Важно

1. Колонки таблицы должны быть зафиксированы, то есть скролинг должен быть внутри таблицы.

1. При загрузке данных с сервера должен быть [Spin](https://ng.ant.design/components/spin/en); 

1. Оповещения должны быть в виде небольших окошек в углу окна браузера. Оповещения должны автоматически скрываться по истечению 5 секунд или при клике по ним. Оповещений может быть несколько сразу. Компонент `ng-zorro` - [Notification](https://ng.ant.design/components/notification/en).

## Результат

1. Код должен быть полностью покрыт комментариями по стандарту **JSDoc**.

1. При разработке необходимо использовать **Git**.

1. Должен быть создан и наполнен файл **README.md**, с описанием проекта, инструкцией запуска.

---

# Что-то на ангулярском

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## ng-openapi-gen

Установка пакета:
```
npm install -g ng-openapi-gen
```

Для генерации сервисов конечных точек и моделей Open API:
```
ng-openapi-gen --input https://nuadolos1.bsite.net/swagger/v1/swagger.json --output user-app/src/app/api
```

- *--input* - путь до файла *swagger.json*, содержащий всю документацию API.
- *--output* - папка, в которую сгенерируются все сервисы и модели.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
