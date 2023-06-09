FROM mongo:latest

COPY ./data_dump /data_dump

CMD mongoimport --host mongo_db --db my_db --collection agents --type json --file /data_dump/agents.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection calls --type json --file /data_dump/calls.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection customers --type json --file /data_dump/customers.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection keywords --type json --file /data_dump/keywords.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection ringgroups --type json --file /data_dump/ringgroups.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection staffs --type json --file /data_dump/staffs.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection statusagents --type json --file /data_dump/statusagents.json --jsonArray