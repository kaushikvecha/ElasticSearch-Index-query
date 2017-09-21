## first run elasticsearch node on your  machine by 


 ./elasticsearch-1.3.4/bin/elasticsearch

Check Localhost:9200 whether node is running or not.
## open a new terminal and run


python indexing.py

##This creates Indicies in app_data folder you can change the the destination folder by configuring elasticsearch.yml file.
## after that query the data here I am doing a simple get query using python

##For querying in python use to query on the indicies
python query.py 


## instead of query.py you can also use Angularjs to query 
##check the js folder which contain controllers you will get the flow if you know basic knowledge of 
##angular

#Now run Index.html in the browser for emaple search clerk in the jobtitle you will get the results of the query.
 
