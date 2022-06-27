---

title: iOS与硬件打交道-NSMutableData NSData Byte的使用
tags:
  - NSData Byte
categories:
  - iOS
date: 2022-06-24 14:41:53
---

### NSMutableData

```//跟原来的数据进行拼接数据
- (void)appendBytes:(const void *)bytes length:(NSUInteger)length;
//跟原来的数据进行拼接数据
- (void)appendData:(NSData *)other;
//将接收器的长度增加给定的字节数
- (void)increaseLengthBy:(NSUInteger)extraLength;
//删除
- (void)replaceBytesInRange:(NSRange)range withBytes:(const void *)bytes;
//清空数据
- (void)resetBytesInRange:(NSRange)range;
//覆盖原有数据
- (void)setData:(NSData *)data;
- //删除
- (void)replaceBytesInRange:(NSRange)range withBytes:(nullable const void *)replacementBytes length:(NSUInteger)replacementLength;
```

<!--more-->

```

//把byte数组数据添加到Data
Byte byte[] = {0x01,0x02,0x03,0x04,0x05,0x06};
NSData *byteData = [[NSData alloc] initWithBytes:byte length:6];//0x010203040506
NSLog(@"byteData:%@",byteData);//byteData:{length = 6, bytes = 0x010203040506}
//把Data数据添加到NSMutableData
NSMutableData *muData = [NSMutableData data];
[muData appendData:byteData];
NSLog(@"muData:%@",muData);//muData:{length = 6, bytes = 0x010203040506}

//将接收器的长度增加给定的字节数
[muData increaseLengthBy:4];
NSLog(@"muData:%@",muData);//muData:{length = 6, bytes = 0x010203040506}

// add  添加
Byte byteT[] = {0x07};
NSData *byteData_0 = [[NSData alloc] initWithBytes:byteT length:1];
[muData appendData:byteData_0];//添加0x07到最后面
NSLog(@"muData:%@",muData);//muData:{length = 7, bytes = 0x01020304050607

// delete  删除
[muData replaceBytesInRange:NSMakeRange(0, 1) withBytes:NULL length:0];//删除第一位
NSLog(@"muData:%@",muData);//muData:{length = 6, bytes = 0x020304050607}

//insert 插入
Byte byte_1[] = {0x08};
NSData *byteData_1 = [[NSData alloc] initWithBytes:byte_1 length:1];
[muData replaceBytesInRange:NSMakeRange(0, 0) withBytes:byteData_1.bytes length:byteData_1.length];//把0x08插入到最前面
NSLog(@"muData:%@",muData);//muData:{length = 7, bytes = 0x08020304050607}

//清空数据
[muData resetBytesInRange:NSMakeRange(0, [muData length])];
[muData setLength:0];
NSLog(@"muData:%@",muData);


Byte byte[] = {0x01,0x02,0x03,0x04,0x05,0x06};
NSData *byteData = [[NSData alloc] initWithBytes:byte length:6];
NSLog(@"byteData:%@",byteData);//byteData:{length = 6, bytes = 0x010203040506}
//appendData 在原来的数据上进行拼接
NSMutableData *muData = [NSMutableData data];
[muData appendData:byteData];
[muData appendData:byteData];
NSLog(@"muData:%@",muData);//muData:{length = 12, bytes = 0x010203040506010203040506}

[muData setData:byteData];
NSLog(@"muData:%@",muData);//muData:{length = 6, bytes = 0x010203040506}

//setData 会覆盖原来的数据
Byte byte[] = {0x01,0x02,0x03,0x04,0x05,0x06};
NSData *byteData = [[NSData alloc] initWithBytes:byte length:6];
NSLog(@"byteData:%@",byteData);//byteData:{length = 6, bytes = 0x010203040506}

```

### NSData

```
//构造空的NSData对象。
+ (instancetype)data;

//初始化
- (instancetype)initWithBytesNoCopy:(void *)bytes length:(NSUInteger)length freeWhenDone:(BOOL)b;
//初始化对象。不进行复制字节数组操作，直接设置字节指针为bytes，长度为length。
- (instancetype)initWithBytesNoCopy:(void *)bytes length:(NSUInteger)length;
//初始化对象。 复制字节数组，设置字节指针指向复制的字节数组，长度为length。
- (instancetype)initWithBytes:(nullable const void *)bytes length:(NSUInteger)length;
//读取文件内容初始化对象。  读取成功则返回对象，如果失败则返回nil。
- (nullable instancetype)initWithContentsOfFile:(NSString *)path;
//读取文件内容初始化对象。 
//读取成功则返回对象。如果失败则返回nil，错误信息保存在errorPtr中。 参数readOptionsMask 指定文件读取选项。
- (nullable instancetype)initWithContentsOfFile:(NSString *)path options:(NSDataReadingOptions)readOptionsMask error:(NSError **)errorPtr;

typedef NS_OPTIONS(NSUInteger, NSDataReadingOptions) {
    NSDataReadingMappedIfSafe =   1UL << 0, 
    NSDataReadingUncached = 1UL << 1,   
    NSDataReadingMappedAlways  = 1UL << 3,

    NSDataReadingMapped = NSDataReadingMappedIfSafe,
    NSMappedRead = NSDataReadingMapped,
    NSUncachedRead = NSDataReadingUncached
};

//读取url内容初始化对象。读取成功则返回对象，如果失败则返回nil。
- (nullable instancetype)initWithContentsOfURL:(NSURL *)url;

//读取url内容初始化对象。 
//读取成功则返回对象。如果失败则返回nil，错误信息保存在errorPtr中。 参数readOptionsMask 指定文件读取选项。
- (nullable instancetype)initWithContentsOfURL:(NSURL *)url options:(NSDataReadingOptions)readOptionsMask error:(NSError **)errorPtr;

//根据NSData对象初始化对象。
- (instancetype)initWithData:(NSData *)data;

//根据文件内容初始化对象。读取文件内容的方式不是read系统调用，而是mmap系统调用
- (nullable id)initWithContentsOfMappedFile:(NSString *)path

//返回长度
@property (readonly) NSUInteger length;
//返回数据
@property (readonly) const void *bytes
//参数buffer保存获取的数据，参数range指定获取数据的区间。
- (void)getBytes:(void *)buffer range:(NSRange)range;
//获取指定长度的数据。如果length大于数据长度，则使用数据长度作为指定长度。
- (void)getBytes:(void *)buffer length:(NSUInteger)length;
//获取所有数据。
- (void)getBytes:(void *)buffer
//截取数据
- (NSData *)subdataWithRange:(NSRange)range;
//比较数据是否相等
- (BOOL)isEqualToData:(NSData *)other;
```



```
//Byte数据转换成Data
Byte byte[] = {0x01,0x02,0x03,0x04,0x05,0x06};
NSData *byteData = [[NSData alloc] initWithBytes:byte length:6];
NSLog(@"byteData:%@",byteData);

//读取桌面的test.txt的文件数据 读取回来是二进制的
NSString *filePath = [NSHomeDirectory() stringByAppendingString:@"/Desktop/test.txt"];
NSData *data5 = [[NSData alloc] initWithContentsOfFile:filePath];
NSData *data6 = [NSData dataWithContentsOfFile:filePath];
NSLog(@"data5: %@",data5);
NSLog(@"data6: %@",data6);

//把url转换成二进制
NSURL *urlPath = [NSURL URLWithString:[@"file://" stringByAppendingString:[NSHomeDirectory() stringByAppendingString:@"/Desktop/test.txt"]]];
NSData *data7 = [[NSData alloc] initWithContentsOfURL:urlPath];
NSData *data8 = [NSData dataWithContentsOfURL:urlPath];
NSLog(@"data7: %@",data7);
NSLog(@"data8: %@",data8);

//获取data的指定范围
// 定义一个长度为100的数组
char buffer[100];
// 将NSData指定范围的数据读入数组
[data8 getBytes:buffer range: NSMakeRange(103, 100)];
```

### Byte跟UInt8是一样的

```
Byte byte[] = {0x01,0x02,0x03,0x04,0x05,0x06};
NSData *byteData = [[NSData alloc] initWithBytes:byte length:6];
NSLog(@"byteData:%@",byteData);

UInt8 byteUInt8[] = {0x01,0x02,0x03,0x04,0x05,0x06};
NSData *byteUInt8Data = [NSData dataWithBytes:byteUInt8 length:6];
NSLog(@"byteUInt8Data: %@",byteUInt8Data);
```

