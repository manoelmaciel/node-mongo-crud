#! /bin/bash

xed notes summary &
# kate ../bin/www ../.env &
kate ../app.js ../routes/index.js ../routes/users.js ../routes/add.js &
gedit ../db.js ../views/index.ejs ../views/users.ejs ../views/add.ejs &

# /usr/bin/flatpak run --branch=stable --arch=x86_64 --command=kate --file-forwarding org.kde.kate -b @@u %U @@
/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=kate --file-forwarding org.kde.kate 


