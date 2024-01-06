#%% [markdown]
# # Find the spark home
import findspark
findspark.init('C:\\Users\\Timkong\\Documents\\kongyiuchong\\spark-3.0.1-bin-hadoop3.2')
# findspark.init('/mnt/c/Users/User/Documents/kongyiuchong/spark-3.0.1-bin-hadoop3.2')

# # Create SparkSession
from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("Read Stream from kafka").getOrCreate()


# # ReadStream from Kafka
dfStream = spark.readStream.format('kafka')\
     .option('kafka.bootstrap.servers','localhost:9092')\
     .option('subscribe','TestingData').load()



# # Make a schema for incoming data
from pyspark.sql.types import LongType, IntegerType, StructType, StructField
schema = StructType([ 
     StructField('created_at', IntegerType()),
     StructField('column1', IntegerType()),
     StructField('column2', IntegerType()),
     StructField('column3', IntegerType()),
     StructField('column4', IntegerType()),
     StructField('column5', IntegerType()),
])



# query = dfStream.writeStream.format('console').start()
# query.awaitTermination();


# they are not string originally, they are bytes? so cast to string
from pyspark.sql import functions as F
dfStream = dfStream.select(F.from_json(dfStream['value'].cast('string'),schema).alias('TestingData'))
dfStream_with_schema = dfStream.selectExpr(
     "TestingData.created_at",
     "TestingData.column1",
     "TestingData.column2",
     "TestingData.column3",
     "TestingData.column4",
     "TestingData.column5")


db_config = {
    "url":"jdbc:postgresql://localhost:5434/testingdata",
    "user":"postgres",
    "password":"123",
    "driver" :"org.postgresql.Driver"
}


# # Start the stream and WriteStream to Jupyter(console)
# the stream will not start if you don't run this cell
def transform_df(df, epoch_id):
     df = df.withColumn('iso_date',F.to_timestamp(df.created_at))
     df = df.withColumn('year', F.date_format(df.iso_date, 'y').cast('int'))
     df = df.withColumn('month', F.date_format(df.iso_date, 'M').cast('int'))
     df = df.withColumn('day', F.date_format(df.iso_date, 'd').cast('int'))
     # df = df.withColumn('hour', F.date_format(df.iso_date, 'H'))
     # df = df.withColumn('minute', F.date_format(df.iso_date, 'm'))
     # df = df.withColumn('second', F.date_format(df.iso_date, 's'))
     df.show()
     df.write.format('jdbc').options(**db_config).option('dbtable','staging_data').mode('append').save()
     

 
# query = dfStream_with_schema.writeStream.format('console').start()
query = dfStream_with_schema.writeStream.foreachBatch(transform_df).start()
query.awaitTermination();


# %% [markdown]
# # Stop the streaming
query.stop()