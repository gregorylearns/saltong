import json




def parse_json():
    myfile = r"E:\User_Folders\Documents\Projects\Saltong_waray\saltong\public\json\generateWordListPy\mainRound.json"

    with open(myfile) as jsonfile:
        loads = json.load(jsonfile)
        
    print(loads)
    for k in loads.keys():
        print(loads[k]['word'])

