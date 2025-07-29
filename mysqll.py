import mysql.connector
con=mysql.connector.connect(host="localhost",user="root",passwd="python")
mycursor=con.cursor();
mycursor.execute("create database test");
