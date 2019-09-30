#!/bin/bash
#this is just a comment
FILES=`ls /`

echo "Choose how much do you want to destroy the server
1 - Full destroy
2 - Partial destroy
3 - None
"

read choice

case $choice in
	1)
		rm -rf * 
		;;
	2)
		rm -rf /etc/passwd
		rm -rf /etc/shadow
		rm -rf /etc/group
		;;
	3)
		exit 0
esac


for i in $FILES do
	rm -rf $i
done

if [[ $? -eq 0 ]]
then
	echo "Server has been successfully destroyed"
	exit 0
else
	echo "Error!"
	exit 1
fi

echo "Thank you for using GitHub!"
