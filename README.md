Maskify Full Stack SaaS Application to be submitted to the Congressional App Challenge
Uses AI to find the prevalence of masks.
Paper is here:
Blazeface is implemented as outlined in this paper: https://arxiv.org/abs/1907.05047
{more info....}



"Tensoract" AI PIPELINE ARCHITECTURE: 
Geotagged image stream -> Extract public photos post april of locations in US
Blazeface AI(consumes Image Stream) --> Extract bounds of faces
AutoCrop(Consumes images and bounds) --> Crops photos to provided bounds
[TRAINING] Custom Mask Net Generation (consumes Croppped Photos) --> Custom Mask Net
[PRODUCTION] Custom Mask Net Activation (consumes Croppped Photos) --> Outputs num of mask for each image and puts into an object
API(consumes mask object) --> Send res to client if provided with proper token containing the mask aggregates per state. Data is further processed on client side based on client needs



TIMELINE:
MUST BE FINISHED BY OCT 19.

TODO:
Implement UI: 90%
Implement API: 80%
Implement Database: 80%
Implement AI: 90%
