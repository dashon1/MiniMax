import zipfile, os, sys
src = '/workspace/product_04_content_machine'
out = '/workspace/store/Product_04_Content_Machine_v1.0.zip'
os.makedirs(os.path.dirname(out), exist_ok=True)
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(src):
        for file in files:
            fp = os.path.join(root, file)
            arcname = fp.replace(src + '/', '', 1)
            zf.write(fp, arcname)
            print(f'ADDED: {arcname}')
size = os.path.getsize(out)
print(f'DONE: {out}')
print(f'SIZE: {size/1024:.1f} KB')