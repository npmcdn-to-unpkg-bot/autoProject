bower:web�İ�������

Bower��һ���ʺ�WebӦ�õİ������������ó���ǰ�˵İ�������ͨ����APIչʾ�˰�����ģ�͡�ʹ����Ŀ������ϵͳ������������ͬ��Ӧ�ó����Ҳ���Ṳ�������������������Ǳ�ƽ�ġ�

webվ�����ɣ���� ���⣬�������ֵȣ�bower���������ٹ�����Щ

---------------------
��װBower:

Bower������Node��npm������ʹ��npmȫ�ְ�װBower��

> npm install -g bower


ȫ�ְ�װBower�󣬿��Բ鿴Bower�İ�����Ϣ��ʹ�����

> bower help

�÷�:

    bower <command> [<args>] [<options>]


����Commands:

    cache-clean    ���Bower�Ļ��棬�����ָ�����Ļ���
    completion      Bower��Tab���Զ����
    help                  ��ʾBower����ĸ�����Ϣ
    info                   ָ�����İ汾��Ϣ������
    init                     ����ʽ�Ĵ���bower.json�ļ�
    install               ��װһ�����صİ�
    link                    ��Ŀ¼�ķ�������
    list, ls               �г������Ѱ�װ�İ�
    lookup              ���ݰ�����ѯ����URL
    register            ע��һ����
    search              ���ݰ�������һ����
    uninstall           ɾ��һ����
    update              ����һ����


---------------
��װ����

bower install jquery

# GitHub shorthand
$ bower install desandro/masonry

# Git endpoint
$ bower install git://github.com/user/package.git

# URL
$ bower install http://example.com/script.js


----------------------------
���»�ж��Bower��

sudo npm update -g bower

sudo npm uninstall -global bower

bower install backbone

�ֶ�ָ���汾�š�bower install jquery-ui#1.10.1

bower info�������ڲ鿴ĳ�������ϸ��Ϣ��bower info jquery-ui


bower list��bower ls��������г���Ŀ��ʹ�õ����п⡣


-----------------------------
�����ļ�.bowerrc
��Ŀ��Ŀ¼�£�Ҳ���Է����û�����Ŀ¼�£���.bowerrc�ļ���Bower�������ļ��������������������

{
  "directory" : "components",
  "json"      : "bower.json",
  "endpoint"  : "https://Bower.herokuapp.com",
  "searchpath"  : "",
  "shorthand_resolver" : ""
}
���е����Ժ������¡�

directory����ſ��ļ�����Ŀ¼����
json�������������json�ļ�����
endpoint��������������ַ�������������ֿ⡣
searchpath��һ�����飬���汸ѡ������������ַ�����ĳ������endpoint���Ҳ��������������������ָ������ַ��ͨ�����ڷ���ĳЩ�������Ŀ⡣
shorthand_resolver��������������Ƽ�д��ʽ��

----------------------------------------------------


����Ϣ�ļ�bower.json
bower.json�ļ�����ڿ�ĸ�Ŀ¼�£����ڱ�����Ŀ�Ŀ���Ϣ������Ŀ��װʱʹ�ã��Լ�Bower������������ȡ��

������һ�����͵�bower.json�ļ���

{
  "name": "app-name",
  "version": "0.1.0", 
  "main": ["path/to/app.html", "path/to/app.css", "path/to/app.js"],
  "ignore": [".jshintrc","**/*.txt"],
  "dependencies": {
    "sass-bootstrap": "~3.0.0",
    "modernizr": "~2.6.2",
    "jquery": "latests"
  },
  "devDependencies": {"qunit": ">1.11.0"}
}
����Ŀ�ĸ�Ŀ¼�£�����bower init���ͨ���ش𼸸����⣬�ͻ��Զ�����bower.json�ļ���

bower init
����bower.json�ļ��Ժ󣬾Ϳ�����bower install���һ���Ӱ�װ���п⡣

bower install




















