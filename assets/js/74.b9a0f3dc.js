(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{430:function(e,t,n){"use strict";n.r(t);var a=n(3),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("转载备份。")]),e._v(" "),n("p",[e._v("本来是想用 shell 脚本的，但是我个人更熟 Python 脚本，所以选择了 Python。")]),e._v(" "),n("p",[e._v("不需要安装 Python 依赖，只需要有 mysqldump 和 gzip 这两个命令就行，毕竟本质还是在拼接 shell。")]),e._v(" "),n("blockquote",[n("p",[e._v("2022.4.17 更新：既然都写 Python 了，为什么不再封装一个包出来，服务器上直接调包，还能有参数选项自动补全呢？所以就有了我的第一个 PyPI 包："),n("a",{attrs:{href:"https://pypi.org/project/vps-backup-utils",target:"_blank",rel:"noopener noreferrer"}},[e._v("vps-backup-utils"),n("OutboundLink")],1),e._v("。")])]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('#!/usr/bin/python3\n\n###########################################################\n#\n# This python script is used for mysql database backup\n# using mysqldump and tar utility.\n#\n# Written by : Rahul Kumar\n# Website: https://tecadmin.net/python-script-for-mysql-database-backup/\n# Created date: Dec 03, 2013\n# Last modified: Aug 17, 2018 \n# Tested with : Python 2.7.15 & Python 3.5\n# Script Revision: 1.4\n#\n##########################################################\n\n# Import required python libraries\n\nimport os\nimport time\nimport datetime\nimport pipes\n\n# MySQL database details to which backup to be done. Make sure below user having enough privileges to take databases backup.\n# To take multiple databases backup, create any file like /backup/dbnames.txt and put databases names one on each line and assigned to DB_NAME variable.\n\nDB_HOST = \'localhost\' \nDB_USER = \'root\'\nDB_USER_PASSWORD = \'_mysql_user_password_\'\n#DB_NAME = \'/backup/dbnameslist.txt\'\nDB_NAME = \'db_name_to_backup\'\nBACKUP_PATH = \'/backup/dbbackup\'\n\n# Getting current DateTime to create the separate backup folder like "20180817-123433".\nDATETIME = time.strftime(\'%Y%m%d-%H%M%S\')\nTODAYBACKUPPATH = BACKUP_PATH + \'/\' + DATETIME\n\n# Checking if backup folder already exists or not. If not exists will create it.\ntry:\n    os.stat(TODAYBACKUPPATH)\nexcept:\n    os.mkdir(TODAYBACKUPPATH)\n\n# Code for checking if you want to take single database backup or assinged multiple backups in DB_NAME.\nprint ("checking for databases names file.")\nif os.path.exists(DB_NAME):\n    file1 = open(DB_NAME)\n    multi = 1\n    print ("Databases file found...")\n    print ("Starting backup of all dbs listed in file " + DB_NAME)\nelse:\n    print ("Databases file not found...")\n    print ("Starting backup of database " + DB_NAME)\n    multi = 0\n\n# Starting actual database backup process.\nif multi:\n   in_file = open(DB_NAME,"r")\n   flength = len(in_file.readlines())\n   in_file.close()\n   p = 1\n   dbfile = open(DB_NAME,"r")\n\n   while p <= flength:\n       db = dbfile.readline()   # reading database name from file\n       db = db[:-1]         # deletes extra line\n       dumpcmd = "mysqldump -h " + DB_HOST + " -P " + DB_PORT + " -u " + DB_USER + " -p" + DB_USER_PASSWORD + " " + db + " > " + pipes.quote(TODAYBACKUPPATH) + "/" + db + ".sql"\n       os.system(dumpcmd)\n       gzipcmd = "gzip " + pipes.quote(TODAYBACKUPPATH) + "/" + db + ".sql"\n       os.system(gzipcmd)\n       p = p + 1\n   dbfile.close()\nelse:\n   db = DB_NAME\n   dumpcmd = "mysqldump -h " + DB_HOST + " -P " + DB_PORT + " -u " + DB_USER + " -p" + DB_USER_PASSWORD + " " + db + " > " + pipes.quote(TODAYBACKUPPATH) + "/" + db + ".sql"\n   os.system(dumpcmd)\n   gzipcmd = "gzip " + pipes.quote(TODAYBACKUPPATH) + "/" + db + ".sql"\n   os.system(gzipcmd)\n\nprint ("")\nprint ("Backup script completed")\nprint ("Your backups have been created in \'" + TODAYBACKUPPATH + "\' directory")\n')])])]),n("p",[e._v("然后加入 "),n("code",[e._v("crontab")]),e._v("，凌晨四点执行：")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" * * * /etc/profile "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /path/to/sql "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" mysql_backup.py\n")])])]),n("p",[e._v("crontab 的语法可以参考 "),n("a",{attrs:{href:"https://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/crontab.html#id5",target:"_blank",rel:"noopener noreferrer"}},[e._v("crontab"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);