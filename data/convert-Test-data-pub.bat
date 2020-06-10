call xlsx2csv Test-data-pub.xlsx
echo Edit Test-data-pub.csv ...
pause
call csv2json Test-data-pub.csv -o Test-data-pub.json -f ","
pause
