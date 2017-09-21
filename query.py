
import requests
res = requests.get('http://localhost:9200')
#print(res.content)


#connect to our cluster
from elasticsearch import Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])



####################################
# get query through collected jobs #
####################################

print(es.get(index='indeed-jobs', doc_type='jobs', id=3))

