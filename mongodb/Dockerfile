FROM mongo:latest

COPY ./data ./data

CMD mongoimport --host mongo_db --db my_db --collection talkDesk.agents --type json --file /data/talkDesk.agents.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection talkDesk.calls --type json --file /data/talkDesk.calls.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection talkDesk.customers --type json --file /data/talkDesk.customers.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection talkDesk.keywords --type json --file /data/talkDesk.keywords.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection talkDesk.ringgroups --type json --file /data/talkDesk.ringgroups.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection talkDesk.staffs --type json --file /data/talkDesk.staffs.json --jsonArray \
    && mongoimport --host mongo_db --db my_db --collection talkDesk.statusagents --type json --file /data/talkDesk.statusagents.json --jsonArray