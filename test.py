import base64
import requests


def get_ocr(request):
    """Responds to any HTTP request.
    Args:
            request (flask.Request): HTTP request object.
    Returns:
            The response text or any set of values that can be turned into a
            Response object using
            # flask.Flask.make_response>`.
            `make_response <http://flask.pocoo.org/docs/1.0/api/
    """

    headers = {
        'content-type': 'application/json; charset=utf-8'
    }

    fl = request.files.get('imagefile', '')
    if fl:
        txt = base64.b64encode(fl.read())
        # return 'txt %s' % txt

        pdata = {
            'requests': [
                {
                    'image': {
                        'content': str(txt)
                    },
                    'features': [
                        {
                            'type': 'TEXT_DETECTION'
                        }
                    ]
                }
            ]
        }

        r = requests.post(
            "https://vision.googleapis.com/v1/images:annotate?key=DONTPUSHKEY", headers=headers, data=pdata)
        return 'res %s' % r.txt

    data = request.data
    if data:
        return 'data %s' % data

    args = request.args
    if args:
        return 'args %s' % args
    return 'nada'
